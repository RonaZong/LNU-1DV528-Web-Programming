---
revision history:
  2022-11-01: "(Rev A) First release."
---
Development tools
========================

This repo contains a development environment with tools for HTML, CSS and JavaScript (client and server).

[[_TOC_]]



Settings for text editor
------------------------

The file `.editorconfig` is used to enforce the coding style in the texteditor, read more on [EditorConfig](https://editorconfig.org/).

To enable editorConfig in Visual Studio Code you may install an extension "[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)".



Install all
------------------------

You can install all tools through the `package.json` or one by one.

The file `package.json` contains all tools needed for the development environment and there is scripts available to run each tool.

This is how you install them all.

```
npm install
```

You can now check what scripts are available for you.

```
npm run
```

The following script will run all linters.


```
npm run lint
```

Read on to check how you install and run them one by one and get som further understanding on each of the tools.



htmlhint
------------------

The tool htmlhint checks your HTML files.

Do this to install [htmlhint](https://www.npmjs.com/package/htmlhint).

```
npm install htmlhint --save-dev
```

Add the following to the script part of the `package.json`.

```json
{
    "scripts": {
        "htmlhint": "npx htmlhint ./public || exit 0"
    }
}
```

You can now execute it like this to check all HTML files in the directory `public/`.

```
npm run htmlhint
```

Check the help.

```
npx htmlhint --help
```

Read more on [HTMLHint](https://htmlhint.com/).



stylelint
------------------

The tool stylelint checks your CSS files.

Do this to install [stylelint](https://www.npmjs.com/package/stylelint).

```
npm install stylelint --save-dev
```

Add the following to the script part of the `package.json`.

```json
{
    "scripts": {
        "stylelint": "npx stylelint \"./public/**/*.css\" || exit 0"
    }
}
```

You need a configuration file like `.stylelintrc.json` with the ruleset to use.

You can now execute it like this to validate all css-files below the public directory.

```
npm run stylelint
```

Check the help.

```
npx stylelint --help
```

Read more on [Stylelint](https://stylelint.io/).



eslint
------------------

The tool eslint checks your JavaScript files.

Do this to install [eslint](https://www.npmjs.com/package/eslint) and to set it up to use a coding standard.

This process is always done in this repo, so the configuration file `eslintrs.js` already exists and all the tools are in the `package.json`.

To install and setup eslint.

```
npm init @eslint/config
```

During the installation process you are asked a few questions to help configuring and installing the tool.

The current choice of coding standard is "[JavaScript Standard Style](https://standardjs.com/)".

After the installation is done you may add the follwoing scripts to the script part of the `package.json`.

```json
{
    "scripts": {
        "eslint": "npx eslint . || exit 0",
        "eslint:fix": "npx eslint . --fix || exit 0"
    }
}
```

You can now execute it like this.

```
npm run lint
npm run lint:fix
```



eslint with jsdoc comments
------------------

To enforce [JSDoc comments](https://jsdoc.app/) the following is added.

First install the jsdoc-plugin for eslint.

```
npm install --save-dev eslint-plugin-jsdoc
```

Then add the following to the eslint configuration file.

```javascript
{
  plugins: [
    'jsdoc'
  ],
  extends: [
    'plugin:jsdoc/recommended'
  ]
}
```

You can now run the eslint again. You can even partially fix missing JSDoc comments.

```
npm run eslint
npm run eslint:fix
```



### Example on JSDoc comments

This is how the JSDOC should look like.

```javascript
/**
 * Calculates the sum of the parameters.
 *
 * @param {number} x - Operand.
 * @param {number} y - Operand.
 * @returns {number} The sum of the operands.
 */
function add(x, y) {
  return x + y
}
```



Generate JSDoc
------------------------

This is how to generate JSDoc for your project.

Start by installing the tool.

```
npm install --save-dev jsdoc
```

Then add the following scripts to your `package.json`.

```json
{
  "scripts": {
    "jsdoc": "npx jsdoc -c .jsdoc.json || exit 0",
  },
}
```

You can now run the command to generate the documentation.

```
npm run jsdoc
```

You can view the configuration file `.jsdoc.json` to see its settings. 

The documentation is generated to `build/jsdoc` and you can point your browser to view it.

You can read more on "[Configuring JSDoc with a configuration file](https://jsdoc.app/about-configuring-jsdoc.html)".



Run a web server
------------------------

It might be useful to run a simple web server to try out your code, you can do like this to include it in your development environment.

Install [http-server](https://www.npmjs.com/package/http-server).

```
npm install http-server --save-dev
```

Then add the following script to start it up.

```json
  "scripts": {
    "http-server": "npx http-server -p 9001 "
  },
```

You can now start the web server and it will load the files available in the directory `public/`.

```
npm run http-server
```



npm run clean
------------------------

Remove all generated files with `npm run clean`.

You can remove all installed and generated files using `npm run clean-all`.

This is how the scripts are defined. Modify the scripts when needed to clean out all generated files.

```json
{
    "scripts": {
        "clean": "rm -rf build/",
      "clean-all": "npm run clean && rm -rf node_modules/ && rm -f package-lock.json"
    }
}
```



npm run lint
------------------------

Execute all linters to build a test suite for your application.

This is how the script are defined.

```json
{
    "scripts": {
        "lint": "npm run htmlhint && npm run stylelint && npm run eslint",
    }
}
```



Docker and docker-compose
------------------------

This development repo contains a structure to [work with Docker](https://docs.docker.com/get-started/). To be able to use this part you need to have both Docker and docker-compose installed.



docker-compose run node bash
------------------------

The image `node` is an example on how to build an image using an exiting node image and install your own code on top on that.

You can build and try out the image like this.

```
docker-compose run node bash
```

This starts the container with a bash terminal and you can check out the version of node installed in the container.

```
$ docker-compose run node bash
Creating dev-env-javascript_node_run ... done
root@68ee6b1280f5:/app# node --version
v18.12.0
root@68ee6b1280f5:/app# 
```

The docker-file used to build the image is located in the `.docker/node/Dockerfile`.

When the container is started, the rules in the `docker-compose.yml` applies to what part of the repo is mounted into the container and what parts are not.



docker-compose up -d nginx
------------------------

The image `nginx` is the web server Nginx to host the static website available in your directory `public/`.

You can build and try out the image like this.

```
docker-compose up nginx
```

Open a web browser to `http://localhost:9080/` to display the website you have in your directory `public/`.

The files used to build the image is located in the `.docker/nginx/`.

When the container is started, the rules in the `docker-compose.yml` applies to what part of the repo is mounted into the container and what parts are not.
