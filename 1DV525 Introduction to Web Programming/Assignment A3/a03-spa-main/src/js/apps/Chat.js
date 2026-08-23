export class ChatApp {
    constructor () {
        this.API_KEY = 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd';
        this.SERVER_URL = 'wss://courselab.lnu.se/message-app/socket';
        this.username = this.getUsername();
        this.messages = [];
        this.maxMessages = 20;
        this.currentChannel = this.getLastChannel() || 'my, not so secret, channel';
        this.emojiMap = {
            ':)': '😊',
            ':(': '😢',
            ':D': '😃',
            ';)': '😉',
            '<3': '❤️',
            ':P': '😛',
            ':O': '😮',
            ':*': '😘'
        };

        if (!this.username) {
            this.promptUsername();
        }

        this.loadCachedMessages();
        this.element = this.createChatElement();
        this.messages.forEach(message => this.displayMessage(message));
        this.ws = null;
        this.connectWebSocket();
    }

    getUsername () {
        return localStorage.getItem('chat-username');
    }

    getLastChannel () {
        return localStorage.getItem('chat-last-channel');
    }

    promptUsername () {
        const username = prompt('Please enter your username for the chat:');
        if (username) {
            localStorage.setItem('chat-username', username);
            this.username = username;
        } else {
            this.username = 'Anonymous-' + Math.floor(Math.random() * 1000);
            localStorage.setItem('chat-username', this.username);
        }
    }

    loadCachedMessages () {
        const cached = localStorage.getItem(`chat-history-${this.currentChannel}`);
        if (cached) {
            this.messages = JSON.parse(cached);
        }
    }

    cacheMessages () {
        localStorage.setItem(
            `chat-history-${this.currentChannel}`,
            JSON.stringify(this.messages.slice(-this.maxMessages))
        );
    }

    createChatElement () {
        const container = document.createElement('div');
        container.className = 'chat-container';

        container.innerHTML = `
            <div class="chat-header">
                <div class="chat-user-info">
                    <span>Logged in as: ${this.username}</span>
                    <button class="chat-change-username">Change Username</button>
                </div>
                <div class="chat-channel-selector">
                    <select class="chat-channel">
                        <option value="my, not so secret, channel">General</option>
                        <option value="code-channel">Code Discussion</option>
                        <option value="random">Random</option>
                    </select>
                </div>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-toolbar">
                <button class="chat-emoji-btn">😊</button>
                <button class="chat-code-btn">Code</button>
            </div>
            <div class="chat-input-area">
                <textarea 
                    class="chat-input" 
                    placeholder="Type a message... Use :) :( :D for emojis"
                    rows="3"
                ></textarea>
                <button class="chat-send">Send</button>
            </div>
            <div class="chat-emoji-picker" style="display: none;">
                <div class="emoji-grid">
                    <button type="button" class="emoji-option" data-emoji="😊" aria-label="Smiling face">😊</button>
                    <button type="button" class="emoji-option" data-emoji="😢" aria-label="Crying face">😢</button>
                    <button type="button" class="emoji-option" data-emoji="😃" aria-label="Happy face">😃</button>
                    <button type="button" class="emoji-option" data-emoji="😉" aria-label="Winking face">😉</button>
                    <button type="button" class="emoji-option" data-emoji="❤️" aria-label="Heart">❤️</button>
                    <button type="button" class="emoji-option" data-emoji="😛" aria-label="Playful face">😛</button>
                    <button type="button" class="emoji-option" data-emoji="😮" aria-label="Surprised face">😮</button>
                    <button type="button" class="emoji-option" data-emoji="😘" aria-label="Kissing face">😘</button>
                </div>
            </div>
        `;

        // // Display cached messages
        // this.messages.forEach(msg => this.displayMessage(msg));

        this.setupEventListeners(container);
        return container;
    }

    setupEventListeners (container) {
        const input = container.querySelector('.chat-input');
        const sendBtn = container.querySelector('.chat-send');
        const changeUsernameBtn = container.querySelector('.chat-change-username');
        const channelSelect = container.querySelector('.chat-channel');
        const emojiBtn = container.querySelector('.chat-emoji-btn');
        const emojiPicker = container.querySelector('.chat-emoji-picker');
        const codeBtn = container.querySelector('.chat-code-btn');

        const sendMessage = () => {
            const message = input.value.trim();
            // console.log('Attempting to send message:', message); // Debug log
            // console.log('WebSocket state:', this.ws?.readyState); // Debug log

            if (!message) {
                // console.log('Message is empty'); // Debug log
                return;
            }

            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                // console.log('WebSocket is not connected'); // Debug log
                this.displaySystemMessage('Not connected to chat server');
                this.connectWebSocket();
                return;
            }

            const chatMessage = {
                type: 'message',
                data: this.processMessage(message),
                username: this.username,
                channel: this.currentChannel,
                key: this.API_KEY
            };

            // console.log('Sending message:', chatMessage); // Debug log

            try {
                this.ws.send(JSON.stringify(chatMessage));
                input.value = '';
            } catch {
                // console.error('Error sending message:', error);
                this.displaySystemMessage('Failed to send message');
            }
        };

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        sendBtn.addEventListener('click', sendMessage);

        changeUsernameBtn.addEventListener('click', () => {
            this.promptUsername();
            container.querySelector('.chat-header span').textContent =
                `Logged in as: ${this.username}`;
        });

        channelSelect.value = this.currentChannel;
        channelSelect.addEventListener('change', (e) => {
            this.currentChannel = e.target.value;
            localStorage.setItem('chat-last-channel', this.currentChannel);
            this.messages = [];
            this.loadCachedMessages();
            const messagesContainer = container.querySelector('.chat-messages');
            messagesContainer.innerHTML = '';
            this.messages.forEach(msg => this.displayMessage(msg));
        });

        emojiBtn.addEventListener('click', () => {
            emojiPicker.style.display =
                emojiPicker.style.display === 'none' ? 'block' : 'none';
        });

        emojiPicker.addEventListener('click', (e) => {
            const emojiOption = e.target.closest('.emoji-option');
            if (!emojiOption) return;

            const start = input.selectionStart ?? input.value.length;
            const end = input.selectionEnd ?? input.value.length;
            input.setRangeText(emojiOption.dataset.emoji, start, end, 'end');
            input.focus();
            emojiPicker.style.display = 'none';
        });

        codeBtn.addEventListener('click', () => {
            input.value += '\n```\n\n```';
            input.focus();
            // Position cursor between code blocks
            const pos = input.value.length - 4;
            input.setSelectionRange(pos, pos);
        });

        // Close emoji picker when clicking outside
        document.addEventListener('click', (e) => {
            if (!emojiBtn.contains(e.target) && !emojiPicker.contains(e.target)) {
                emojiPicker.style.display = 'none';
            }
        });
    }

    processMessage (message) {
        // Convert text emoticons to emojis
        let processed = message;
        for (const [emoticon, emoji] of Object.entries(this.emojiMap)) {
            processed = processed.split(emoticon).join(emoji);
        }
        return processed;
    }

    formatMessageContent (content) {
        // Check for code blocks
        const codeBlockRegex = /```([\s\S]*?)```/g;
        const escapedContent = this.escapeHtml(content);
        return escapedContent.replace(codeBlockRegex, (match, code) => {
            return `<pre class="chat-code-block"><code>${code.trim()}</code></pre>`;
        });
    }

    displayMessage (message) {
        const messagesContainer = this.element.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';

        const timestamp = new Date().toLocaleTimeString();
        const formattedContent = this.formatMessageContent(message.data);

        messageElement.innerHTML = `
            <span class="chat-timestamp">${timestamp}</span>
            <span class="chat-username">${message.username}:</span>
            <span class="chat-text">${formattedContent}</span>
        `;

        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    connectWebSocket () {
        try {
            // console.log('Connecting to WebSocket...'); // Debug log
            this.ws = new WebSocket(this.SERVER_URL);

            this.ws.onopen = () => {
                // console.log('WebSocket connected successfully'); // Debug log
                this.displaySystemMessage('Connected to chat server');
            };

            this.ws.onmessage = (event) => {
                // console.log('Received WebSocket message:', event.data); // Debug log
                try {
                    const message = JSON.parse(event.data);

                    if (message.type === 'heartbeat') {
                        // console.log('Received heartbeat'); // Debug log
                        return;
                    }

                    if (message.channel === this.currentChannel) {
                        // console.log('Displaying message:', message); // Debug log
                        this.messages.push(message);
                        if (this.messages.length > this.maxMessages) {
                            this.messages.shift();
                        }
                        this.displayMessage(message);
                        this.cacheMessages();
                    }
                } catch {
                    // console.error('Error processing message:', error);
                    this.displaySystemMessage('Failed to process message');
                }
            };

            this.ws.onclose = () => {
                // console.log('WebSocket connection closed'); // Debug log
                this.displaySystemMessage('Disconnected from chat server');
                setTimeout(() => this.connectWebSocket(), 5000);
            };

            this.ws.onerror = () => {
                // console.error('WebSocket error:', error);
                this.displaySystemMessage('Error connecting to chat server');
            };
        } catch {
            // console.error('Error creating WebSocket:', error);
            this.displaySystemMessage('Failed to connect to chat server');
        }
    }

    displaySystemMessage (message) {
        const messagesContainer = this.element.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message system';
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
    }

    escapeHtml (unsafe) {
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}
