/**
 * @module pwd/TaskBar
 */

export class TaskBar {
    constructor () {
        this.element = this.createTaskBarElement();
        this.windows = new Map();
        document.body.appendChild(this.element);
    }

    createTaskBarElement () {
        const taskbar = document.createElement('div');
        taskbar.className = 'taskbar';
        return taskbar;
    }

    addWindow (window) {
        const taskbarItem = document.createElement('div');
        taskbarItem.className = 'taskbar-item';
        taskbarItem.textContent = window.element.querySelector('.window-title').textContent;

        taskbarItem.addEventListener('click', () => {
            if (window.element.classList.contains('minimized')) {
                window.minimize();
            }
            window.focus();
        });

        this.element.appendChild(taskbarItem);
        this.windows.set(window, taskbarItem);

        window.onMinimize = () => {
            taskbarItem.classList.toggle('active');
        };

        window.onClose = () => {
            taskbarItem.remove();
            this.windows.delete(window);
        };
    }
}
