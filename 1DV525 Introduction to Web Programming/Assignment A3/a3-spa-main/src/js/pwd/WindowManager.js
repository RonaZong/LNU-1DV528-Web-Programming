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
     * Creates a new window manager.
     */
    constructor () {
        this.nextX = 20;
        this.nextY = 20;
        this.positionOffset = 30;
    }

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
                width: 600,
                height: 700
            };
            break;
        }

        default:
            return null;
        }

        const position = this.getNextPosition(
            windowConfig.width,
            windowConfig.height
        );
        
        const appWindow = new Window(
            windowConfig.title,
            windowConfig.content,
            position.x,
            position.y,
            windowConfig.width,
            windowConfig.height
        );

        appWindow.app = windowConfig.app;
        return appWindow;
    }

    /**
     * Calculates the next cascading window position.
     * @param {number} width - The new window width
     * @param {number} height - The new window height
     * @returns {{x: number, y: number}} The next window position
     * @private
     */
    getNextPosition (width, height) {
        const margin = 20;
        const taskbarHeight = 56;

        const maxX = Math.max(
            margin,
            window.innerWidth - width - margin
        );

        const maxY = Math.max(
            margin,
            window.innerHeight - height - taskbarHeight
        );

        const position = {
            x: Math.min(this.nextX, maxX),
            y: Math.min(this.nextY, maxY)
        };

        this.nextX += this.positionOffset;
        this.nextY += this.positionOffset;

        if (this.nextX > maxX || this.nextY > maxY) {
            this.nextX = margin;
            this.nextY = margin;
        }

        return position;
    }
}
