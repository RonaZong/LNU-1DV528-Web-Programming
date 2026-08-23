import { Desktop } from './pwd/Desktop.js';
import { WindowManager } from './pwd/WindowManager.js';

// Create a single instance of WindowManager
const windowManager = new WindowManager();

class App {
    constructor () {
        this.desktop = new Desktop(windowManager);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => new App());
