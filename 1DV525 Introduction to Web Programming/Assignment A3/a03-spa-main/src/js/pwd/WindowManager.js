import { Window } from './Window.js';
import { MemoryGame } from '../apps/MemoryGame.js';
import { ChatApp } from '../apps/Chat.js';
import { QuizApp } from '../apps/Quiz.js';

/**
 * @module pwd/WindowManager
 */

/**
 * Creates and configures application windows.
 * @class
 */
export class WindowManager {
    /**
     * Creates a new window based on the application type
     * @param {string} appName - The name of the application to create
     * @returns {Window|null} The created window instance or null if app type is invalid
     */
    createWindow (appName) {
        let windowConfig;

        switch (appName) {
        case 'memory': {
            const game = new MemoryGame(4, 4);
            windowConfig = {
                app: game,
                title: 'Memory Game',
                content: game.element,
                width: 600,
                height: 800
            };
            break;
        }
        case 'chat': {
            const chat = new ChatApp();
            windowConfig = {
                app: chat,
                title: 'Chat',
                content: chat.element,
                width: 400,
                height: 600
            };
            break;
        }
        case 'custom': {
            const quiz = new QuizApp();
            windowConfig = {
                app: quiz,
                title: 'Quiz Game',
                content: quiz.element,
                width: 500,
                height: 600
            };
            break;
        }
        default:
            return null;
        }

        const appWindow = new Window(
            windowConfig.title,
            windowConfig.content,
            this.getRandomPosition('x'),
            this.getRandomPosition('y'),
            windowConfig.width,
            windowConfig.height
        );

        appWindow.app = windowConfig.app;
        return appWindow;
    }

    /**
     * Generates a random position for new windows
     * @param {('x'|'y')} axis - The axis to generate position for
     * @returns {number} The calculated position
     * @private
     */
    getRandomPosition (axis) {
        const max = axis === 'x' ? window.innerWidth - 300 : window.innerHeight - 300;
        return Math.max(20, Math.random() * max);
    }
}
