---
revision: 
    "2023-01-19": "(A, mos) First version."
---
TypeScript Development Environment
==============================

The language [TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript. It adds features for typing of variables, function parameters and return type, together with typing in classes and a construction of interface. TypeScript is transpiled down to JavaScript and then executed using for example Node.js or in the web browser.

First we install the TypeScript compiler [`typescript`](https://www.npmjs.com/package/typescript) as a npm package, it is included in the `package.json`.

```
npm install
```

You can now run the TypeScript compiler like this.

```
npx tsc --version
```

We can also install the package [`ts-node`](https://www.npmjs.com/package/ts-node) which both compiles and executes the code in one command.

Try it out like this.

```
npx ts-node --version
```



ESLint
-----------------------------

You can install ESLint for TypeScript using this command.

```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

You now need a [`.eslintrc` configuration file](.eslintrc).

<!-- Fix same setup as for the js files -->

You can also create an [`.eslintignore`](.eslintignore).

In the package.json is a script setup for running the linter.

```json
  "scripts": {
    "tslint": "eslint . --ext .ts",
    "tslint:fix": "eslint . --fix --ext .ts"
  },
```

You can execute the linter as this.

```
npm run tslint
npm run tslint:fix
```



Compile and run
-----------------------------

There is a hello world in the dir [`hello-world`](hello-world). Go into that directory and compile like this.

```
npx tsc app.ts
```

A file `app.js` is generated and can be executed through node.

```
node app
```

We can also install the package [`ts-node`](https://www.npmjs.com/package/ts-node) which both compiles and executes the code in one command.

Try it out like this.

You can also try the command `ts-node` which compiles and executes the code in one command.

```
npx ts-node app
```



References
-----------------------------

Read more.

* [TypeScript](https://www.typescriptlang.org/)

The program uses the following API.

* [`typescript`](https://www.npmjs.com/package/typescript)
* [`ts-node`](https://www.npmjs.com/package/ts-node)
