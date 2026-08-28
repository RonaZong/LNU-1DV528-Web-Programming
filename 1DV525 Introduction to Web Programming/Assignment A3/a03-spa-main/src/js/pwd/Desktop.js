/**
 * @module pwd/Desktop
 */

import { TaskBar } from './TaskBar.js';

export class Desktop {
    /**
     * Creates a new Desktop instance
     * @param {object} windowManager - The window manager instance
     */
    constructor (windowManager) {
        this.desktop = document.getElementById('desktop');
        this.windowManager = windowManager;
        this.taskBar = new TaskBar();
        this.setupEventListeners();
    }

    /**
     * Sets up event listeners for desktop icons
     * @private
     */
    setupEventListeners () {
        const icons = document.querySelectorAll('.desktop-icon');
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                this.openApp(icon.dataset.app);
            });
        });
    }

    /**
     * Opens a new application window
     * @param {string} appName - The name of the application to open
     */
    openApp (appName) {
        const window = this.windowManager.createWindow(appName);
        if (window) {
            this.desktop.appendChild(window.element);
            this.taskBar.addWindow(window);
            window.focus();
        }
    }
}
