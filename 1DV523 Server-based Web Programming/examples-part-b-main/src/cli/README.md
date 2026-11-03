---
revision: 
    "2023-01-12": "(B, mos) Updated for vt23."
    "2021-11-04": "(A, mos) First version."
---
CLI
==============================

How to write a command line interace (CLI) program using node and reading input from the command line and outputting a menu.

The code is written using ESM modules. The `Game` is separated into a class and the `Menu` is separated into a module that exports one function. The main program is quite small.

Start the program by:

```
node index
```

The directory `old-cjs` contains a older version using node require csj modules.



References
-----------------------------

The program uses the following Node modules, see their API specification.

* [readline](https://nodejs.org/api/readline.html)
