/**
 * @module apps/MemoryGame
 */

/**
 * Represents a Memory Game instance
 * @class
 */
export class MemoryGame {
    /**
     * Creates a new Memory Game
     * @param {number} rows - Number of rows in the game grid
     * @param {number} cols - Number of columns in the game grid
     */
    constructor (rows = 4, cols = 4) {
        this.rows = rows;
        this.cols = cols;
        this.attempts = 0;
        this.firstCard = null;
        this.secondCard = null;
        this.isLocked = false;
        this.matchedPairs = 0;
        this.cards = this.createCards();
        this.element = this.createGameElement();
        this.selectedIndex = -1; // For keyboard navigation
    }

    /**
     * Creates and shuffles the card deck
     * @private
     * @returns {Array} Shuffled array of card pairs
     */
    createCards () {
        const totalPairs = (this.rows * this.cols) / 2;
        const cards = [...Array(totalPairs)].flatMap((_, i) => [i, i]);
        return this.shuffle(cards);
    }

    /**
     * Shuffles an array using Fisher-Yates algorithm
     * @private
     * @param {Array} array - Array to shuffle
     * @returns {Array} Shuffled array
     */
    shuffle (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Creates the game board DOM element
     * @private
     * @returns {HTMLElement} Game board element
     */
    createGameElement () {
        const container = document.createElement('div');
        container.className = 'memory-game';

        const controls = document.createElement('div');
        controls.className = 'memory-controls';
        controls.innerHTML = `
            <select class="memory-size">
                <option value="2,2">2x2</option>
                <option value="2,4">2x4</option>
                <option value="4,4" selected>4x4</option>
            </select>
            <span class="memory-attempts">Attempts: 0</span>
        `;

        const board = document.createElement('div');
        board.className = 'memory-board';
        board.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;

        this.cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'memory-card';
            cardElement.dataset.index = index;
            cardElement.dataset.value = card;
            cardElement.tabIndex = 0;
            cardElement.innerHTML = `
                <div class="memory-card-inner">
                    <div class="memory-card-front">
                        <img src="assets/memory/0.png" alt="Card back">
                    </div>
                    <div class="memory-card-back">
                        <img src="assets/memory/${card + 1}.png" alt="Card ${card + 1}">
                    </div>
                </div>
            `;
            board.appendChild(cardElement);
        });

        container.appendChild(controls);
        container.appendChild(board);
        this.setupEventListeners(container);
        return container;
    }

    /**
     * Sets up event listeners for the game
     * @private
     * @param {HTMLElement} container - Game container element
     */
    setupEventListeners (container) {
        const board = container.querySelector('.memory-board');
        const sizeSelect = container.querySelector('.memory-size');

        board.addEventListener('click', (e) => {
            const card = e.target.closest('.memory-card');
            if (card) this.handleCardClick(card);
        });

        container.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });

        sizeSelect.addEventListener('change', (e) => {
            const [rows, cols] = e.target.value.split(',').map(Number);
            this.resetGame(rows, cols);
        });
    }

    /**
     * Handles keyboard navigation and card selection
     * @private
     * @param {KeyboardEvent} e - Keyboard event
     */
    handleKeyboard (e) {
        const cards = [...this.element.querySelectorAll('.memory-card')];

        switch (e.key) {
        case 'ArrowRight':
            this.selectedIndex = Math.min(this.selectedIndex + 1, cards.length - 1);
            break;
        case 'ArrowLeft':
            this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
            break;
        case 'ArrowUp':
            this.selectedIndex = Math.max(this.selectedIndex - this.cols, 0);
            break;
        case 'ArrowDown':
            this.selectedIndex = Math.min(this.selectedIndex + this.cols, cards.length - 1);
            break;
        case 'Enter':
        case ' ':
            if (this.selectedIndex >= 0) {
                this.handleCardClick(cards[this.selectedIndex]);
            }
            break;
        default:
            return;
        }

        cards[this.selectedIndex]?.focus();
        e.preventDefault();
    }

    /**
     * Handles card click/selection
     * @private
     * @param {HTMLElement} card - Selected card element
     */
    handleCardClick (card) {
        if (
            this.isLocked ||
            card.classList.contains('flipped') ||
            card.classList.contains('matched')
        ) return;

        card.classList.add('flipped');

        if (!this.firstCard) {
            this.firstCard = card;
            return;
        }

        this.secondCard = card;
        this.attempts++;
        this.updateAttempts();
        this.checkForMatch();
    }

    /**
     * Checks if selected cards match
     * @private
     */
    checkForMatch () {
        const match =
            this.firstCard.dataset.value === this.secondCard.dataset.value;

        if (match) {
            this.handleMatch();
        } else {
            this.handleMismatch();
        }
    }

    /**
     * Handles matching cards
     * @private
     */
    handleMatch () {
        this.isLocked = true;
        this.firstCard.classList.add('matched');
        this.secondCard.classList.add('matched');
        this.matchedPairs++;

        const gameComplete = this.matchedPairs === this.cards.length / 2;

        // Keep the matched pair face-up long enough for the flip animation to
        // finish before the player can select another card.
        setTimeout(() => {
            this.resetTurn();
            if (gameComplete) {
                this.handleGameComplete();
            }
        }, 600);
    }

    /**
     * Handles mismatched cards
     * @private
     */
    handleMismatch () {
        this.isLocked = true;
        setTimeout(() => {
            this.firstCard.classList.remove('flipped');
            this.secondCard.classList.remove('flipped');
            this.resetTurn();
        }, 1000);
    }

    /**
     * Updates the attempts counter display
     * @private
     */
    updateAttempts () {
        const attemptsElement = this.element.querySelector('.memory-attempts');
        attemptsElement.textContent = `Attempts: ${this.attempts}`;
    }

    /**
     * Resets the current turn
     * @private
     */
    resetTurn () {
        this.firstCard = null;
        this.secondCard = null;
        this.isLocked = false;
    }

    /**
     * Handles game completion
     * @private
     */
    handleGameComplete () {
        setTimeout(() => {
            alert(`Congratulations! You won in ${this.attempts} attempts!`);
        }, 500);
    }

    /**
     * Resets the game with new dimensions
     * @param {number} rows - Number of rows
     * @param {number} cols - Number of columns
     */
    resetGame (rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.attempts = 0;
        this.matchedPairs = 0;
        this.firstCard = null;
        this.secondCard = null;
        this.isLocked = false;
        this.selectedIndex = -1;
        this.cards = this.createCards();
        const newGame = this.createGameElement();
        this.element.replaceWith(newGame);
        this.element = newGame;
    }
}
