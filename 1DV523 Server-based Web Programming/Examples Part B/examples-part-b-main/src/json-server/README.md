---
revision: 
    "2023-01-16": "(A, mos) First version."
---
JSON server for development use
==============================

This example shows how you can setup a JSON server for development including your own dataset.

The example uses the node module `json-server` and configures it.

Start it by:

```
npm start
```

The command will output in the terminal on how to connect to it and what data source it uses.

You can verify that it works using curl.

```
curl http://localhost:3000/persons
curl http://localhost:3000/persons/1
```

You should see JSON output from the database from the above commands.



References
-----------------------------

The program uses the following npm modules, see their documentation.

* [json-server](https://www.npmjs.com/package/json-server)
