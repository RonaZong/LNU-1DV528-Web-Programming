/**
 * @module pwd/TaskBar
 */

/**
 * Represents the desktop taskbar and its open-window buttons.
 * @class
 */
export class TaskBar {
    /**
     * Creates and attaches the taskbar.
     */
    constructor () {
        this.element = this.createTaskBarElement();
        this.windows = new Map();
        document.body.appendChild(this.element);
    }

    /**
     * Creates the taskbar element.
     * @returns {HTMLElement} The taskbar element
     * @private
     */
    createTaskBarElement () {
        const taskbar = document.createElement('div');
        taskbar.className = 'taskbar';
        return taskbar;
    }

    /**
     * Adds a window button to the taskbar.
     * @param {object} appWindow - The window instance
     */
    addWindow (window) {
        const taskbarItem = document.createElement('div');
        const title = window.getTitle();
        
        taskbarItem.type = 'button';
        taskbarItem.className = 'taskbar-item';
        taskbarItem.textContent = title;
        taskbarItem.title = title;

        taskbarItem.addEventListener('click', () => {
            if (window.isMinimized) {
                window.minimize();
                window.focus();
                return;
            }
            
            if (window.element.classList.contains('focused')) {
                window.minimize();
                return;
            }
            
            window.focus();
        });

        this.element.appendChild(taskbarItem);
        this.windows.set(window, taskbarItem);

        window.onFocus = () => {
            this.windows.forEach(item => {
                item.classList.remove('active');
            });

            taskbarItem.classList.add('active');
        };

        window.onMinimize = () => {
            taskbarItem.classList.toggle('minimized', window.isMinimized);
            if (window.isMinimized) {
                taskbarItem.classList.remove('active');
            }
        };

        window.onClose = () => {
            taskbarItem.remove();
            this.windows.delete(window);
        };
    }
}
