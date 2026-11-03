---
revision: 
    "2023-01-16": "(A, mos) First version."
---
Use fetch to make HTTP requests GET, POST, PUT, PATCH, DELETE
==============================

This example shows how to use the builtin `fetch` to perform HTTP requests and deal with the results.

The fetch code is mainly written into its own `modules/Fetch.mjs` to enhance the code structure.

The example program connects to an hardcoded url and expects that you have started the [`src/json-server`](./../json-server/README.md).

When the json-server is started, run this example program by:

```
node index
```

You will see the output of the whole HTTP response and the JSON part of the response body.

It might be a good idea to go into the source code and limit the outputs.



References
-----------------------------

The program uses the following API.

* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
