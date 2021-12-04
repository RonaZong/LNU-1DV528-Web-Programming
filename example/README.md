Example programs
==============================

Various code samples used in teaching and tutoring within the course.



Install dev environment
------------------------------

There are a set of tools and linters available in the repo. Install them through npm and then check the scripts available.

```
npm install
npm run
```



Code standard and eslint
------------------------------

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



Extra linters
------------------------------

The following linters have scripts available in `npm run`.

[HTMLHint](https://htmlhint.com/) to lint `*.html` files.

```
npm run htmlhint
npx htmlhint --help
```

[Stylelint](https://stylelint.io/) to lint `*.css` files.

```
npm run stylelint
npx stylelint --help
```



Minifiers
------------------------------

The following minifiers are installed using npm.

* [html-minifier](https://www.npmjs.com/package/html-minifier)
* [clean-css](https://www.npmjs.com/package/clean-css), clean-css-cli
* [uglify-es](https://www.npmjs.com/package/uglify-es)

Here are som example runs using these tools.

```
npx html-minifier -c .html-minifier.conf web/javascript-core/basics/index.html
npx clean-css-cli web/javascript-core/pushing-the-ball/style.css
npx uglify-es web/javascript-core/basics/main.js
```
