/**
 * @module apps/Quiz
 */

let quizInstanceCounter = 0;

/**
 * Represents a Quiz App instance
 * @class
 */
export class QuizApp {
    /**
     * Creates a new quiz application instance.
     */
    constructor () {
        this.BASE_URL = 'https://courselab.lnu.se/quiz/question/1';
        this.currentQuestion = null;
        this.timer = null;
        this.isDestroyed = false;
        this.timeLimit = 10;
        this.startTime = null;
        this.totalTime = 0;
        this.instanceId = `quiz-${++quizInstanceCounter}`;
        this.nickname = this.getNickname();
        this.element = this.createQuizElement();

        if (!this.nickname) {
            this.promptNickname();
        } else {
            this.startQuiz();
        }
    }

    getNickname () {
        return localStorage.getItem('quiz-nickname');
    }

    promptNickname () {
        const nickname =
            prompt('Enter your nickname for the quiz:')?.trim();

        this.nickname = nickname || 'Anonymous';
        localStorage.setItem('quiz-nickname', this.nickname);

        this.element.querySelector('.quiz-nickname').textContent =
            `Player: ${this.nickname}`;

        this.startQuiz();
    }

    createQuizElement () {
        const container = document.createElement('div');
        container.className = 'quiz-container';

        container.innerHTML = `
            <div class="quiz-header">
                <span class="quiz-nickname">Player: ${this.nickname || 'Anonymous'}</span>
                <span class="quiz-timer">Time: 10s</span>
            </div>
            <div class="quiz-content">
                <div class="quiz-question"></div>
                <div class="quiz-options"></div>
                <div class="quiz-input-area">
                    <input type="text" class="quiz-answer-input" placeholder="Type your answer...">
                    <button class="quiz-submit">Submit</button>
                </div>
            </div>
            <div class="quiz-controls">
                <button class="quiz-highscore">View Highscores</button>
                <button class="quiz-restart" style="display: none;">Restart Quiz</button>
            </div>
        `;

        this.setupEventListeners(container);
        return container;
    }

    setupEventListeners (container) {
        const submitBtn = container.querySelector('.quiz-submit');
        const input = container.querySelector('.quiz-answer-input');
        const highscoreBtn = container.querySelector('.quiz-highscore');
        const restartBtn = container.querySelector('.quiz-restart');

        submitBtn.addEventListener('click', () => this.submitAnswer());

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitAnswer();
            }
        });

        highscoreBtn.addEventListener('click', () => this.showHighscores());
        restartBtn.addEventListener('click', () => this.startQuiz());
    }

    async startQuiz () {
        this.resetQuiz();
        this.startTime = Date.now();
        await this.fetchQuestion(this.BASE_URL);
    }

    resetQuiz () {
        this.totalTime = 0;
        this.clearTimer();
        this.element.querySelector('.quiz-question').innerHTML = '';
        this.element.querySelector('.quiz-options').innerHTML = '';
        this.element.querySelector('.quiz-answer-input').value = '';
        this.element.querySelector('.quiz-restart').style.display = 'none';
        this.element.querySelector('.quiz-input-area').style.display = 'flex';
        this.element.querySelector('.quiz-answer-input').style.display = 'block';
        this.element.querySelector('.quiz-submit').style.display = 'block';
    }

    async fetchQuestion (url) {
        try {
            const response = await fetch(url);
            const question = await response.json();
            if (this.isDestroyed) return;
            this.currentQuestion = question;
            this.displayQuestion(question);
            this.startTimer();
        } catch (error) {
            this.showError('Failed to fetch question');
        }
    }

    displayQuestion (question) {
        const questionElement = this.element.querySelector('.quiz-question');
        const optionsElement = this.element.querySelector('.quiz-options');
        const inputElement = this.element.querySelector('.quiz-answer-input');

        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        inputElement.value = '';

        // Check if question has alternatives
        if (question.alternatives) {
            inputElement.style.display = 'none';
            Object.entries(question.alternatives).forEach(([key, value]) => {
                const option = document.createElement('div');
                const optionId = `${this.instanceId}-${key}`;

                option.className = 'quiz-option';
                option.innerHTML = `
                    <input
                        type="radio"
                        name="${this.instanceId}-option"
                        value="${key}"
                        id="${optionId}"
                    >
                    <label for="${optionId}">${value}</label>
                `;

                optionsElement.appendChild(option);
            });
        } else {
            inputElement.style.display = 'block';
        }
    }

    startTimer () {
        this.clearTimer();
        let timeLeft = this.timeLimit;

        const updateTimer = () => {
            const timerElement = this.element.querySelector('.quiz-timer');
            timerElement.textContent = `Time: ${timeLeft}s`;

            if (timeLeft === 0) {
                this.handleGameOver('Time\'s up!');
            }
            timeLeft--;
        };

        updateTimer();
        this.timer = setInterval(updateTimer, 1000);
    }

    clearTimer () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    async submitAnswer () {
        const answer = this.getAnswer();
        if (!answer) return;

        try {
            const response = await fetch(this.currentQuestion.nextURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ answer })
            });

            const result = await response.json();
            if (this.isDestroyed) return;
            if (response.ok) {
                if (result.nextURL) {
                    await this.fetchQuestion(result.nextURL);
                } else {
                    this.handleVictory();
                }
            } else {
                this.handleGameOver('Wrong answer!');
            }
        } catch (error) {
            this.showError('Failed to submit answer');
        }
    }

    getAnswer () {
        const radioButtons = this.element.querySelectorAll('input[type="radio"]');
        const textInput = this.element.querySelector('.quiz-answer-input');

        if (radioButtons.length > 0) {
            const selectedOption = Array.from(radioButtons).find(radio => radio.checked);
            return selectedOption ? selectedOption.value : null;
        }

        return textInput.value.trim();
    }

    handleVictory () {
        this.clearTimer();
        this.totalTime = (Date.now() - this.startTime) / 1000;
        this.updateHighscores();
        this.showGameOver(`Congratulations! You completed the quiz in ${this.totalTime.toFixed(1)} seconds!`);
    }

    handleGameOver (message) {
        this.clearTimer();
        this.showGameOver(message);
    }

    showGameOver (message) {
        const questionElement = this.element.querySelector('.quiz-question');
        const optionsElement = this.element.querySelector('.quiz-options');
        const inputArea = this.element.querySelector('.quiz-input-area');
        const restartBtn = this.element.querySelector('.quiz-restart');

        questionElement.textContent = message;
        optionsElement.innerHTML = '';
        inputArea.style.display = 'none';
        restartBtn.style.display = 'block';
    }

    updateHighscores () {
        const highscores = JSON.parse(localStorage.getItem('quiz-highscores') || '[]');
        highscores.push({
            nickname: this.nickname,
            time: this.totalTime
        });

        highscores.sort((a, b) => a.time - b.time);
        highscores.splice(5); // Keep only top 5

        localStorage.setItem('quiz-highscores', JSON.stringify(highscores));
    }

    showHighscores () {
        const highscores = JSON.parse(localStorage.getItem('quiz-highscores') || '[]');
        const questionElement = this.element.querySelector('.quiz-question');
        const optionsElement = this.element.querySelector('.quiz-options');
        const inputArea = this.element.querySelector('.quiz-input-area');
        const restartBtn = this.element.querySelector('.quiz-restart');

        questionElement.textContent = 'Highscores';
        optionsElement.innerHTML = highscores
            .map((score, index) => `
                <div class="quiz-highscore-entry">
                    ${index + 1}. ${score.nickname} - ${score.time.toFixed(1)}s
                </div>
            `)
            .join('');

        inputArea.style.display = 'none';
        restartBtn.style.display = 'block';
    }

    showError (message) {
        const questionElement = this.element.querySelector('.quiz-question');
        questionElement.textContent = message;
    }

    /**
     * Stops the active timer when the quiz window is closed.
     */
    destroy () {
        this.isDestroyed = true;
        this.clearTimer();
    }
}
