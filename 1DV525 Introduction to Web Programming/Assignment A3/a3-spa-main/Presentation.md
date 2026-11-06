Since my desktop computer does not have a built-in camera, the face view was recorded simultaneously on my phone and added as picture-in-picture.  



[0:00–0:25 — Show your face and student ID]



Hello, my name is [YOUR NAME], and my student ID is [STUDENT ID]. This is my presentation of Assignment A3, the Personal Web Desktop.



The application is a single-page application built with vanilla JavaScript, ES modules, HTML and CSS. It contains a Memory Game, a real-time WebSocket Chat, and my additional Quiz application.



[0:25–1:10 — Demonstrate the desktop and windows]



The desktop icons open applications inside custom windows rather than new browser windows. Every click creates a new, independent application instance, so several applications can run simultaneously.



[Open Memory, Chat and Quiz. Drag the windows and click between them.]



The windows can be dragged, resized and closed. Clicking a window gives it focus and brings it in front of the other windows.



As additional window-management features, a window can be maximized and restored to its previous position and size. It can also be minimized and restored through the taskbar.



[Maximize and restore one window. Minimize it and restore it from the taskbar.]



[1:10–2:00 — Demonstrate Memory]



The Memory Game supports multiple independent game windows and three board sizes: two by two, two by four and four by four. It also counts the number of attempts.



The complete game can be controlled without a mouse. I use Tab to enter the board, the arrow keys to move the visible focus, and Enter or Space to turn a card.



[Use only the keyboard to select and match two cards.]



A correctly matched pair remains face-up and receives a green visual indication. This provides clearer feedback than removing the cards from the board.



[2:00–3:35 — Demonstrate Chat and F6]



The Chat connects to the course WebSocket server. The first time it is opened, it asks for a username. The username is stored in local storage, so it is retained when another Chat window is opened or when the PWD is restarted.



[Open two Chat windows on the same channel.]



Several Chat windows can run at the same time. Messages are entered through a textarea and can be sent with the button or the Enter key.



[Send a message from one window and show it in both.]



I implemented five enhanced Chat features for F6.



First, the user can choose between different channels. Second, the latest twenty messages for each channel are cached locally. Third, the Chat supports an emoji picker and converts common emoticons. Fourth, text surrounded by triple backticks is displayed as a code block. Fifth, the username can be changed.



[Briefly show the channel selector, emoji and Code button. Change the username.]



Changing the username is synchronized between all currently open Chat windows. When a Chat window is closed, its WebSocket connection, reconnect timer and global event listeners are also removed.



[3:35–4:20 — Demonstrate Quiz]



My additional application is a Quiz that communicates with the course Quiz API. It supports both text answers and multiple-choice questions, with a ten-second timer for every question.



The nickname is stored locally and is displayed immediately after it is entered. Completed results can be saved in a local high-score list.



[Open two Quiz windows and select one radio option in each.]



Each Quiz instance has unique radio-button names and IDs, so selecting an answer in one window does not modify the selection in another window. Closing a Quiz also stops its active timer.



[4:20–5:30 — Show source code]



[Open WindowManager.js.]



The project separates the desktop framework from the applications. WindowManager creates the correct application and connects it to a reusable Window instance. The applications and the PWD components are organized as separate ES modules.



[Open MemoryGame.js and show handleKeyboard.]



This method implements keyboard navigation using the arrow keys, Enter and Space.



[Open Chat.js and show destroy.]



The destroy method is an example of lifecycle management. It clears the reconnect timer, removes global event listeners and closes the WebSocket. This prevents closed Chat windows from continuing to work in the background.



I also escape received message content before rendering it, which reduces the risk of injecting unsafe HTML into the Chat.



[5:30–6:15 — Show testing]



[Open the terminal and run or show the results of these commands.]



I used the course-provided npm scripts for HTMLHint, Stylelint and ESLint. The project passes:



npm test,



npm run jsdoc,



and npm run build.



The original HT24 tool configuration contained stylistic Stylelint rules that were removed from Stylelint version 16. I kept the course script structure and recommended configuration, removed only unsupported rules, and fixed the actual CSS and source-code issues reported by the current tools.



[6:15–6:45 — Reflection]



The strongest parts of my solution are its modular structure, multi-window isolation, keyboard-accessible Memory Game, Chat enhancements, and application cleanup.



Possible future improvements include automated browser tests, better offline information in the Chat, preserving the original timestamps of cached messages, and more responsive window behavior on small screens.



Overall, this assignment improved my understanding of DOM events, ES modules, WebSockets, local storage, keyboard accessibility and application lifecycle management.



Thank you for watching.