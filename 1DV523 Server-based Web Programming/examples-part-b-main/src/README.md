---
revision: 
    "2023-01-17": "(A, mos) First version and cloned the 'introduction-collection'."
---
Overview of the sample programs
==============================

This is an overview and categorisation of the example programs.

[[_TOC_]]

<!--
TODO

* Improve example on async/await including an example on wait-all
-->



The beginning
-----------------------------

The first tiny steps.

1. [src/main](./main) shows a hello world and how to write a main function or not.

1. [src/modules/es-import-class](./modules/es-import-class) how to write a class in a separate file and include it.

1. [src/modules/es-import-module](./modules/es-import-module) how to write a module in a separate file and include it.



The API
-----------------------------

Use the built in Node API.

1. [src/builtins](./builtins) you can use the builtin objects in JavaScript as usual.

1. [src/input-output](./input-output) to read input data from the terminal and to output to the terminal.

1. [src/async-await](./async-await) how to work with asynchronous events and the difference when execution is out of sync.



Small applications
-----------------------------

Smaller applications to learn how to program the structure from.

1. [src/cli](./cli) a menu driven terminal application that plays a guessing game of "Guess My Number".

1. [src/cli-command-line-arguments](./cli-command-line-arguments) to see how to use the command line arguments sent into the command while started.



HTML API
-----------------------------

These examples are related to HTML APIs.

1. [src/fetch-api](./fetch-api) to see how the Fetch API can be used to make a HTTP request.

1. [src/fetch-api-with-module](./fetch-api-with-module/) an extended Fetch API example that wrapped the fetch code into its own module and also includes POST, PUT, PATCH, DELETE requests.

1. [src/fetch-api-request-methods](./fetch-api-request-methods/) builds on the previous example but is split into several example programs where each program focus on each HTTP request method as GET, POST, PUT, PATCH, DELETE.

<!-- 
* do-http-request
-->



Use external npm modules
-----------------------------

This is how you can include and use external npm modules.

1. [src/console-table-printer](./console-table-printer) to print out a datastructure into a table using colors and formats.

    1. [src/console-table](./console-table) is doing the same but using the builtin `console.table()`.

1. [src/html-parser](./html-parser) to parse HTML code into a datastructure that can be analysed and parts from the document can be extracted.



Node server
-----------------------------

These are examples on how to write a server using Node.

1. [src/node-server/small-node-webserver](./node-server/small-node-webserver/) showing various ways of creating a small Node webserver dealing with requests, responses, querystring and request body.

<!--
* a-restserver-using-node
* a-web-server-using-node-http-module
-->



Utilities and development tools
-----------------------------

These might be handy when developing.

1. [src/json-server](./json-server/) using an npm module to setup a fake JSON server for development.



Express
-----------------------------

These examples are on the Express web application framework.

1. [src/express/hello](./express/hello/) to get going and say "hello world".

1. [src/express/mvc](./express/mvc/) showing how MVC can be implemented with Express.

1. [src/express/mongoose](./express/mongoose/) on how to connect Express to the MongoDB database using Mongoose.

1. [src/express/crud](./express/crud/) on how to build a CRUD interface in the web browser.

1. [src/express/session](./express/session/) showing how to work with the session and flash messages.

1. [src/express/authentication](./express/authentication/) showing how to work with authentication to enable login using the session.

1. [src/express/websocket](./express/websocket/) how to work with Webcoskets API.

<!--
1. [src/express/socketio](./express/socketio/) showinhow to implement websockets using the library socketio.
-->



TypeScript
-----------------------------

These examples are on the TypeScript programming language.

1. [src/typescript](./typescript/) to first install the development environment and the linter.

1. [src/typescript/hello-world](./typescript/hello-world/) a sample program saying Hello World to get started with the compiler and the linter.
