Example
----------------------------

This is a repo with example programs that show different aspects on how to work with Node.js. The examples are used as a base for the weekly Zoom sessions.

You can review the repo at [GitLab 1DV523 Example](https://gitlab.lnu.se/1dv523/content/example).

You can clone the repo like this.

```
clone git@gitlab.lnu.se:1dv523/content/example.git
```

There is a `package.json` in the root of the repo. You can install the linters and run the testsuite to check if the source complies with the linters.

```
# Install the needed linters
npm install

# Run the testsuite with the linters
npm test

# Check what scripts are available
npm run
```

Review the repo `README.md` for details on the linters and their configuration.

You can use this structure to setup your own repo for development.



The example programs in `src/`
----------------------------

The example programs are in their own directory below `src/`. Each having their own `README.md` explaining how to get going with the example and what to learn.

The README might also contain reading references into the API used.
