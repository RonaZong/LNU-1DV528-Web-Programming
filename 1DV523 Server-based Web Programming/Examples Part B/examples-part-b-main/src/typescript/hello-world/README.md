---
revision: 
    "2023-01-12": "(A, mos) First version."
---
TypeScript Hello World
==============================

The language [TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript. It adds features for typing of variables, function parameters and return type, together with typing in classes and a construction of interface. TypeScript is transpiled down to JavaScript and then executed using for example Node.js or in the web browser.

The example contains a main program in `app.ts` and we can compile it like this.

```
npx tsc app.ts
```

A file `app.js` is generated and can be executed through node.

```
node app
```

You can also compile and execute in one command.

```
npx ts-node app
```

To run the linter, do like this.

```
npm run tslint
```

Investigate the code and do some updates to recompile and execute.



References
-----------------------------

Read more.

* [TypeScript](https://www.typescriptlang.org/)

The program uses the following API.

* [`typescript`](https://www.npmjs.com/package/typescript)
* [`ts-node`](https://www.npmjs.com/package/ts-node)
