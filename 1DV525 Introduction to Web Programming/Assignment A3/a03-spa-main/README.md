# A3 SPA
# Personal Web Desktop (PWD)

A browser-based desktop environment that allows you to run multiple applications in a window-like interface.

## Features
- Window management system with draggable windows
- Multiple application support
- Memory Game
- Real-time Chat
- Quiz Application

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

The application will be available at `http://localhost:5173` during development.

## Built With
- Vanilla JavaScript (ES Modules)
- WebSocket API
- Vite

## Areas for Improvement:
### Window Management:
- Could add window snapping
- Could improve minimize animation
### Memory Game:
- Could add sound effects
- Could add difficulty levels
### Chat:
- Could add file sharing
- Could improve offline handling


## Tooling Compatibility Note
This resubmission follows the HT24 Assignment 3 specification and its linked HTML, CSS and JavaScript development-tools setup.
The installed Stylelint version is 16. Several stylistic rules used by the older configuration were removed from Stylelint core. I therefore migrated the Stylelint configuration according to the official Stylelint 16 migration guide. The supplied npm-script structure and the functional requirements of the assignment were otherwise kept unchanged.
The final project passes:
npm test
npm run jsdoc
npm run build

## Feature 1: PWD Functional Requirements
I implemented a single-page application that functions as a Personal Web Desktop.
The solution separates the desktop system into reusable Desktop, WindowManager, Window and TaskBar modules. WindowManager selects and creates the requested application, while the reusable Window class provides the surrounding window interface.
Each click on a desktop icon creates a new application instance. This allows multiple Memory, Chat and Quiz windows to run simultaneously.

The window system supports:

Opening multiple application instances
Dragging and resizing windows
Window focus
Bringing the focused window in front of other windows
Closing, minimizing and maximizing windows
Cascading initial window positions
Application-specific lifecycle cleanup when a window is closed

Instead of opening at unrelated random positions, new windows use cascading positions similar to desktop operating systems. Each new window is offset slightly from the previous one. When the next position would exceed the available viewport, positioning restarts near the upper-left corner.

The desktop icons have individual click listeners that request the corresponding application from WindowManager.

## Feature 2: PWD Non-functional Requirements
I organized the application using ES modules with separate responsibilities for window management and each application.

The JavaScript modules include JSDoc documentation for exported classes, modules and relevant methods. Separate stylesheets are used for the desktop, windows, Memory Game, Chat and Quiz.

I used Vite as the development server and production build tool. The code follows the configured StandardJS conventions and passes HTMLHint, Stylelint and ESLint without notices.

The modular architecture makes it possible to add another application without rewriting the existing applications or window-management system.

## Feature 3: Memory Game Window Application
The Memory Game uses a grid-based layout with CSS card-flipping animations.

It supports:
Multiple independent Memory windows
Board sizes of 2×2, 2×4 and 4×4
An attempts counter
Mouse controls
Complete keyboard controls
A visible keyboard-focus indicator
Matched cards remaining face-up with a green visual indication

The game can be played without using a mouse. Tab moves the focus into the game, the arrow keys move between cards, and Enter or Space turns the selected card.

The game state is maintained independently inside each MemoryGame instance. Mismatched cards remain visible briefly before turning back, while matched cards remain face-up.

Changing the board size creates a new shuffled deck, resets the attempts counter and keeps the displayed size selector synchronized with the actual number of rows and columns.

The selectable board sizes and attempts counter are my additional Memory Game features.

## Feature 4: Chat Window Application
I implemented a WebSocket-based Chat application that connects to the course WebSocket server.

The Chat supports:

Multiple simultaneous Chat windows
Asking for a username when no saved username exists
Persisting the username with localStorage
Retaining the username in new Chat windows and after restarting the PWD
Entering messages through a textarea
Sending with the Send button or Enter
Keeping Shift+Enter available for a new line
Displaying the latest twenty received messages
Reconnection handling
Connection-status and error messages

Received usernames and message content are escaped before being rendered to reduce the risk of unsafe HTML injection.

When a Chat window is closed, its WebSocket connection is closed, pending reconnect timers are cancelled, and global event listeners are removed. This prevents closed Chat instances from reconnecting in the background.

## Feature 5: Quiz Application
My additional application is a Quiz that communicates with the course REST API.

It supports:

Fetching questions from the API
Submitting answers to the API
Text-answer questions
Multiple-choice questions
A ten-second timer for each question
Nickname persistence using localStorage
Immediate display of a newly entered nickname
A local top-five high-score list
Restarting the Quiz
Multiple independent Quiz windows

A successful answer loads the next question. A wrong answer or expired timer ends the current attempt. Completing the Quiz records the total completion time.

Each Quiz instance generates unique radio-button names and IDs. Therefore, selecting an option in one Quiz window does not cancel a selection in another Quiz window.

The initial Quiz window size and its flex layout were adjusted so that normal questions, the answer field and the controls are visible without unnecessary vertical scrolling. Longer content can still be scrolled when required.

Closing a Quiz window clears its active timer and prevents an outstanding API response from updating a destroyed application.

## Feature 6: Enhanced Chat Application
I implemented five Chat enhancements:

Channel selection
Message-history caching
Emoji support
Code-block formatting
Changing the username

The Chat provides three selectable channels. The selected channel and its latest twenty cached messages are stored with localStorage.

Users can insert emojis through an emoji picker, and common text emoticons are automatically converted into emoji characters.

The Code button inserts triple-backtick markers. Text between these markers is displayed as a formatted code block.

Changing the username updates localStorage and dispatches a custom event. All currently open Chat windows receive this event and immediately display the new username.

Encrypted messages, an extended custom Chat protocol and multiplayer Memory through Chat were not implemented because they are optional examples rather than mandatory F6 requirements.

## Feature 7: Additional Enhancements
I implemented the following additional window-management features:

Cascading initial window positions
Maximizing windows
Restoring the previous position and size after unmaximizing
Minimizing windows
Restoring minimized windows from a visible taskbar
Minimizing the focused window by clicking its taskbar item
Switching focus by clicking another taskbar item
Resizing windows
Double-clicking the title bar to maximize or restore
Smooth CSS transitions for window-state changes
Managing taskbar items for multiple open windows

The TaskBar class uses a Map to associate each open window with its taskbar item.

Taskbar interactions behave similarly to a desktop operating system:

Clicking the item for a minimized window restores and focuses it.
Clicking the item for the currently focused window minimizes it.
Clicking another visible window item brings that window to the front.
Closing a window removes its corresponding taskbar item.

Taskbar items visually distinguish focused, background and minimized windows.

Window movement and resizing were also optimized. State-change animations are kept for maximizing and minimizing, but CSS transitions are temporarily disabled while a window is actively being dragged or resized. This prevents the window position from lagging behind the mouse pointer.

## Project Implementation Reflection
This project was a significant learning experience in building a larger single-page application without relying on a frontend framework.

The main architectural challenge was separating reusable window-management behavior from application-specific behavior. Using ES modules and reusable Window objects helped keep these responsibilities separate.

During the resubmission, I identified several multi-instance and lifecycle problems that were not obvious when testing only one application window.

Cached Chat messages were initially rendered before the Chat DOM element had been completely created. I corrected the initialization order so the element is created before cached messages are displayed.

Closing a window initially removed only its DOM element. I added application lifecycle cleanup so that a closed Chat no longer reconnects in the background and a closed Quiz no longer keeps its timer active.

Multiple Quiz windows initially shared radio-button names. I solved this by assigning every Quiz instance a unique identifier.

The Memory Game board-size selector was initially recreated with a hardcoded 4×4 selection. This caused the displayed selection to disagree with the actual board after changing sizes. I changed the selector so that its value is derived from the current game state.

The original random window positioning was replaced by bounded cascading positions. This produces more predictable placement while still making multiple windows visible.

The taskbar was extended from a simple restore control into a two-way window control. It can now minimize the focused window, restore a minimized window and switch focus between visible windows.

I also found that applying transition: all caused window movement to lag behind the mouse. I restricted transitions to the relevant visual properties and disabled them during active dragging and resizing. This made the interaction substantially more responsive.

Another challenge was revisiting an HT24 project with current development tools. Stylelint 16 no longer supports several rules from the older configuration. This required distinguishing genuine CSS errors from configuration rules that had been removed.

These improvements made the application more reliable when multiple independent windows are running simultaneously.

## TIL for This Course Part
A custom window system requires coordinated handling of dragging, focus, resizing and window state.
Predictable cascading positions provide better usability than unrelated random positions.
The user interface should derive its displayed values from the current application state.
Recreating a DOM element can reset form controls unless their values are explicitly restored.
transition: all can make frequently updated position and size properties feel delayed.
Visual transitions should be disabled during direct manipulation such as dragging and resizing.
A taskbar can function as both a status display and a controller for window state.
Keyboard accessibility needs both event handling and a clearly visible focus indicator.
Every application window should maintain independent instance state.
Form-control names and IDs must be unique when multiple instances of the same application can exist.
WebSocket connections require error handling, reconnection logic and explicit cleanup.
Removing a DOM element does not automatically remove timers, network connections or global event listeners.
localStorage is useful for persistent state, but temporary application state should remain inside each application instance.
Custom browser events can synchronize shared state between otherwise independent modules.
User-provided content should be escaped before it is inserted into HTML.
Development-tool configurations sometimes need migration when package APIs change.

## Overall TIL for This Course

Modern JavaScript and browser APIs can be used to build complex applications without a frontend framework.
ES modules and clearly separated responsibilities make larger applications easier to maintain.
Browser APIs such as WebSocket, Fetch, DOM events and localStorage are powerful but require careful lifecycle management.
Testing multiple instances can reveal problems that are not visible when only one instance is tested.
UI controls must remain synchronized with the underlying application state.
Performance problems can come from CSS behavior as well as JavaScript logic.
Accessibility and desktop-style usability should be considered during implementation rather than added only at the end.
Linting, documentation and production builds are important parts of delivering a maintainable project.
Tool versions and configuration files must be kept compatible without weakening the original functional requirements.
Clear documentation and small, focused modules save time when returning to an older project.

## Course Reflection
The assignments provided valuable practical experience with client-side JavaScript, APIs, WebSockets, ES modules, testing tools and maintainable application structure.
The Personal Web Desktop assignment was particularly useful because it required several independent applications to work together inside a reusable window-management system.
Revisiting the assignment later also demonstrated how quickly JavaScript tooling changes and gave me practical experience in migrating configuration while preserving the original assignment requirements.