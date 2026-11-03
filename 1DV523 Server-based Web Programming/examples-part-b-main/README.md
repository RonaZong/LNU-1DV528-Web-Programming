Course material for Node
============================

This is course material for node including development tools, linters, example programs, exercises and lectures.

[[_TOC_]]



Development environment
----------------------------

The development environment in this repo is based on the tools and setup from the following repos.

* [Development tools and linters (HTML, CSS, JavaScript)](https://gitlab.com/mikael-roos/html-css-js-dev)

The short story on how to setup the development environment is like this.

Start with an empty directory, then do the following.

```text
npm init --yes
npm install --save-dev              \
    htmlhint                        \
    stylelint                       \
    stylelint-config-recommended    \
    eslint                          \
    eslint-config-standard          \
    eslint-plugin-import            \
    eslint-plugin-jsdoc             \
    eslint-plugin-promise           \
    eslint-plugin-n                 \
    http-server                     \
    jsdoc                           \
    vite
```

Download sample configuration files using curl.

```text
curl --silent --output .editorconfig https://gitlab.com/mikael-roos/html-css-js-dev/-/raw/main/.editorconfig
curl --silent --output .gitignore https://gitlab.com/mikael-roos/html-css-js-dev/-/raw/main/.gitignore
curl --silent --output .stylelintrc.js https://gitlab.com/mikael-roos/html-css-js-dev/-/raw/main/.stylelintrc.js
curl --silent --output .eslintrc.js https://gitlab.com/mikael-roos/html-css-js-dev/-/raw/main/.eslintrc.js
curl --silent --output .jsdoc.json https://gitlab.com/mikael-roos/html-css-js-dev/-/raw/main/.jsdoc.json
curl --silent --output vite.config.js https://gitlab.com/mikael-roos/html-css-js-dev/-/raw/main/vite.config.js
```

The script part needs to manually be added to the `package.json`.

```json
{
    "scripts": {
        "http-server": "npx http-server -p 9001",
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview",
        "htmlhint": "npx htmlhint public src || exit 0",
        "stylelint": "npx stylelint **/*.css || exit 0",
        "stylelint:fix": "npx stylelint --fix **/*.css || exit 0",
        "eslint": "npx eslint . || exit 0",
        "eslint:fix": "npx eslint --fix . || exit 0",
        "jsdoc": "npx jsdoc -c .jsdoc.json || exit 0",
        "lint": "npm run htmlhint && npm run stylelint && npm run eslint",
        "test": "npm run lint",
        "clean": "rm -rf build/",
        "clean-all": "npm run clean && rm -rf node_modules/ && rm -f package-lock.json"
    }
}
```

Verify that the scripts are available.

```text
npm run
```



Docker
----------------------------

The repo also includes a setup for Docker and Docker-compose. View the file `docker-compose.yaml` to see what services are available.

You may want to try out the node container.

```text
docker-compose run node bash
```

Then check what version you have installed on node.

```text
node --version
```
