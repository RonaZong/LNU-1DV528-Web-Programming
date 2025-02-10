---
revision: 
    "2023-01-16": "(A, mos) First version."
---
Use fetch to make a HTTP request
==============================

This small example shows how to use the builtin `fetch` to perform a HTTP request and print out the result.

The example program connects to an hardcoded url and expects that you have started the [`src/json-server`](./../json-server/README.md).

When the json-server is started, run this example program by:

```
node index
```

You will see the output of the whole HTTP response and the JSON part of the response body.



References
-----------------------------

The program uses the following API.

* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
