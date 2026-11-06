A03 SPA
======================

Repo for the assignment 03.

Bootstrapped with Create Snowpack App (CSA) and slightly modified with the development environment.



Available Scripts
----------------------


### npm install

Install your dependencies.



### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.



### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!



### npm test

Execute all linters.



### npm run clean

Remove all generated files.



### npm run lint (lint:fix)

Code validation according to [@lnu/eslint-config](https://www.npmjs.com/package/@lnu/eslint-config).

The linter used is [`eslint`](https://eslint.org/) and the code style is [JavaScript Standard Style](https://standardjs.com/rules.html) with JSDOC comments for functions.

This is how the JSDOC should look like.

```javascript
/**
 * Calculates the sum of the parameters.
 *
 * @param {number} x - Operand.
 * @param {number} y - Operand.
 * @returns {number} The sum of the operands.
 */
function add(x, y){
    return x + y
}
```

Execute eslint like this, from the root of the repo.

```
npm run lint
npx eslint --help
```

Use the "fixer" to let the tool fix your code style.

```
npm run lint:fix
```



### npm run htmlhint

[HTMLHint](https://htmlhint.com/) to lint `*.html` files.

```
npm run htmlhint
npx htmlhint --help
```



### npm run stylelint

[Stylelint](https://stylelint.io/) to lint `*.css` files.

```
npm run stylelint
npx stylelint --help
```


### Submission

Feature 1: PWD Functional Requirements.
I implemented a single-page application that functions as a personal web desktop. The core functionality revolves around the WindowManager class, which handles window creation, management, and positioning. I used ES6 modules to organize the code cleanly, with separate modules for Windows, WindowManager, and Desktop classes. The window system supports multiple instances, dragging, focusing, and z-index management. Each window is created as a DOM element with its event listeners for interaction. The desktop icons trigger window creation through event delegation, making the system efficient and scalable.

Feature 2: PWD Non-functional Requirements.
I maintained clean code organization using ES modules and followed JSDoc standards for documentation. The application's visual appeal was achieved through carefully crafted CSS, with separate stylesheets for different components (window.css, memory.css, chat.css, quiz.css). I used Vite as our build tool, which provided excellent development experience with module replacement. The code follows standard JavaScript conventions and passes linting requirements. The modular architecture makes the code maintainable and extensible.

Feature 3: Memory Game Window Application.
The memory game implementation uses a grid-based layout with cards that flip on click. I implemented keyboard navigation for accessibility, allowing users to play using the arrow keys and Enter. The game tracks attempts and supports different board sizes (2x2, 2x4, 4x4). I used CSS transforms for card-flipping animations and maintained the game state in the MemoryGame class. The matching logic uses timeouts for smooth gameplay, showing cards for a second before flipping back if they don't match.

Feature 4: Chat Window Application.
I implemented a WebSocket-based chat application that connects to the course server. The chat supports real-time messaging with error handling and reconnection logic. Messages are displayed in a scrollable container with timestamps. I implemented proper message escaping for security and added support for system messages. The chat maintains a connection state and provides feedback for connection status changes.

Feature 5: Quiz Application.
The quiz application uses the REST API to fetch questions and submit answers. I implemented a timer system that gives users 10 seconds per question. The application supports text and multiple-choice questions, with different UI elements for each type. I used localStorage to persist high scores and implemented a nickname system. The quiz provides immediate feedback for correct/incorrect answers and displays final scores with time tracking.

Feature 6: Enhanced Chat Application.
I enhanced the chat with several enhancements: emoji support with text shortcuts and a picker, code block formatting, channel selection, and message history caching. The improved version supports multiple channels with persistent history per channel. I implemented a more sophisticated UI with a toolbar for special features. Message caching uses localStorage to persist chat history between sessions.

Feature 7: Additional Enhancements.
I added window management features including maximize, minimize, and resize functionality. Windows can be restored from a minimized state, and their positions/sizes are preserved when unmaximizing. I implemented smooth transitions for window state changes and added a taskbar-like system for managing multiple windows. The window manager now tracks all open windows and their states.

Project Implementation Reflection.
This project was a significant learning experience in building a complex single-page application. The most challenging aspects were managing window z-index ordering and implementing smooth window dragging. WebSocket implementation for the chat required careful error handling and reconnection logic. The modular architecture proved valuable as the application grew in complexity. One interesting challenge was balancing feature richness with code maintainability. The use of ES6 modules and modern JavaScript features made the code more organized and maintainable.

TIL for This Course Part.
      Implementing drag-and-drop functionality requires careful consideration of event handling
      WebSocket connections need robust error handling and reconnection logic
      Local storage is valuable for maintaining state between sessions
      CSS transforms and transitions can create smooth, professional-looking animations
      Event delegation can significantly improve performance with multiple similar elements

Overall TIL for This Course.
      Modern JavaScript provides powerful tools for building complex applications
      Proper code organization is crucial for maintainable projects
      Browser APIs (WebSocket, localStorage, DOM) are powerful but require careful handling
      Testing and error handling are as important as feature implementation
      Documentation and clean code practices save time in the long run
      Building modular, reusable components makes development more efficient