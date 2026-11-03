---
revision: 
    "2023-01-17": "(A, mos) First version with video."
---
Introduction to Node.js programming environment
==============================

This is an ordered collection of a subset of all example programs that can be useful to get aquinted to the Node.js programming environment. The collection shows you how to create a main, using MJS modules, working with JavaScript builtin objects, using the Node API and working with external packages through npm.

[[_TOC_]]



Video
-----------------------------

This is a recorded presentation, 31 minutes long (English), when Mikael goes through the content of this article.

[![2023-01-17 en](https://img.youtube.com/vi/bTh159n6h2w/0.jpg)](https://www.youtube.com/watch?v=bTh159n6h2w)



The beginning
-----------------------------

The first tiny steps.

1. [src/main](./main) shows a hello world and how to write a main function or not.

1. [src/modules/es-import-class](./modules/es-import-class) how to write a class in a separate file and include it.

1. [src/modules/es-import-module](./modules/es-import-module) how to write a module in a separate file and include it.

<!--
TODO

* src/modules/node-import-class
* src/modules/node-import-module
-->



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

1. [src/fetch-api-with-module]() an extended Fetch API example that wrapped the fetch code into its own module and also includes POST, PUT, PATCH, DELETE requests.



Use external npm modules
-----------------------------

This is how you can include and use external npm modules.

1. [src/console-table-printer](./console-table-printer) to print out a datastructure into a table using colors and formats.

    1. [src/console-table](./console-table) is doing the same but using the builtin `console.table()`.

1. [src/html-parser](./html-parser) to parse HTML code into a datastructure that can be analysed and parts from the document can be extracted.



Utilities and development tools
-----------------------------

These might be handy when developing.

1. [src/json-server](./json-server/) using an npm module to setup a fake JSON server for development.
