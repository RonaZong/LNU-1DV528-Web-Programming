/**
 * @module pwd/Window
 */

export class Window {
    /**
     * Creates a new Window instance
     * @param {string} title - The window title
     * @param {HTMLElement} content - The window content
     * @param {number} x - Initial X position
     * @param {number} y - Initial Y position
     * @param {number} width - Window width
     * @param {number} height - Window height
     */
    constructor (title, content, x = 20, y = 20, width = 400, height = 300) {
        this.isMaximized = false;
        this.isMinimized = false;
        this.app = null;
        this.handleMouseMove = null;
        this.handleMouseUp = null;
        this.originalSize = { width, height };
        this.originalPos = { x, y };

        this.element = this.createWindowElement(title);
        this.setPosition(x, y);
        this.setSize(width, height);
        this.contentElement = this.element.querySelector('.window-content');
        this.contentElement.appendChild(content);
        this.setupEventListeners();
    }

    /**
     * Creates the window DOM element
     * @private
     * @param {string} title - The title displayed in the window bar
     * @returns {HTMLElement} The created window element
     */
    createWindowElement (title) {
        const element = document.createElement('div');
        element.className = 'window';
        element.innerHTML = `
            <div class="window-titlebar">
                <div class="window-controls">
                    <h3 class="window-title">${title}</h3>
                </div>
                <div class="window-buttons">
                    <span class="window-minimize">─</span>
                    <span class="window-maximize">□</span>
                    <span class="window-close">×</span>
                </div>
            </div>
            <div class="window-content"></div>
            <div class="window-resize-handle"></div>
        `;
        return element;
    }

    /**
     * Sets up window event listeners
     * @private
     */
    setupEventListeners () {
        const titlebar = this.element.querySelector('.window-titlebar');
        const closeBtn = this.element.querySelector('.window-close');
        const maximizeBtn = this.element.querySelector('.window-maximize');
        const minimizeBtn = this.element.querySelector('.window-minimize');
        const resizeHandle = this.element.querySelector('.window-resize-handle');

        let isDragging = false;
        let isResizing = false;
        let initialX, initialY, initialWidth, initialHeight;

        titlebar.addEventListener('mousedown', (e) => {
            if (e.button !== 0 || e.target === closeBtn || e.target === maximizeBtn || e.target === minimizeBtn) return;
            e.preventDefault();
            isDragging = true;
            initialX = e.clientX - this.element.offsetLeft;
            initialY = e.clientY - this.element.offsetTop;
            this.element.classList.add('dragging');
        });

        resizeHandle.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            e.preventDefault();
            isResizing = true;
            initialX = e.clientX;
            initialY = e.clientY;
            initialWidth = this.element.offsetWidth;
            initialHeight = this.element.offsetHeight;
            this.element.classList.add('resizing');
        });

        this.handleMouseMove = (e) => {
            if (isDragging && !this.isMaximized) {
                e.preventDefault();
                const currentX = e.clientX - initialX;
                const currentY = e.clientY - initialY;
                this.setPosition(currentX, currentY);
            } else if (isResizing && !this.isMaximized) {
                e.preventDefault();
                const newWidth = initialWidth + (e.clientX - initialX);
                const newHeight = initialHeight + (e.clientY - initialY);

                this.setSize(
                    Math.max(300, newWidth),
                    Math.max(200, newHeight)
                );
            }
        };

        document.addEventListener('mousemove', this.handleMouseMove);

        this.handleMouseUp = () => {
            isDragging = false;
            isResizing = false;
            this.element.classList.remove('dragging', 'resizing');
        };

        document.addEventListener('mouseup', this.handleMouseUp);

        closeBtn.addEventListener('click', () => this.close());
        maximizeBtn.addEventListener('click', () => this.maximize());
        minimizeBtn.addEventListener('click', () => this.minimize());

        this.element.addEventListener('mousedown', () => this.focus());

        // Double click titlebar to maximize
        titlebar.addEventListener('dblclick', () => this.maximize());
    }

    /**
     * Sets the window position
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    setPosition (x, y) {
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }

    /**
     * Sets the window size
     * @param {number} width - Window width
     * @param {number} height - Window height
     */
    setSize (width, height) {
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
    }

    /**
     * Maximizes the window
     */
    maximize () {
        if (this.isMaximized) {
            this.setPosition(this.originalPos.x, this.originalPos.y);
            this.setSize(this.originalSize.width, this.originalSize.height);
            this.element.classList.remove('maximized');
        } else {
            this.originalPos = {
                x: this.element.offsetLeft,
                y: this.element.offsetTop
            };
            this.originalSize = {
                width: this.element.offsetWidth,
                height: this.element.offsetHeight
            };
            this.setPosition(0, 0);
            this.setSize(window.innerWidth, window.innerHeight);
            this.element.classList.add('maximized');
        }
        this.isMaximized = !this.isMaximized;
    }

    /**
     * Minimizes the window
     */
    minimize () {
        this.isMinimized = !this.isMinimized;
        this.element.classList.toggle('minimized', this.isMinimized);

        if (this.isMinimized) {
            this.element.classList.remove('focused');
        }

        if (this.onMinimize) {
            this.onMinimize(this);
        }
    }

    /**
     * Brings window to front
     */
    focus () {
        const windows = document.querySelectorAll('.window');

        windows.forEach(win => win.classList.remove('focused'));

        this.element.classList.add('focused');

        if (this.onFocus) {
            this.onFocus(this);
        }
    }

    /**
     * Closes the window
     */
    close () {
        document.removeEventListener(
            'mousemove',
            this.handleMouseMove
        );
        document.removeEventListener(
            'mouseup',
            this.handleMouseUp
        );

        if (this.app?.destroy) {
            this.app.destroy();
        }

        if (this.onClose) {
            this.onClose(this);
        }

        this.element.remove();
    }

    /**
     * Gets the window title
     * @returns {string} The window title
     */
    getTitle () {
        return this.element.querySelector('.window-title').textContent;
    }
}
