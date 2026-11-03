---
revision: 
    "2023-01-25": "(A, mos) First version with video."
---
Use fetch to make HTTP requests GET, POST, PUT, PATCH, DELETE
==============================

This example builds on the example [`src/fetch-api-with-module`](../fetch-api-with-module/) but shows the different HTTP request methods one by one.

[[_TOC_]]



Video
-----------------------------

This is a recorded presentation, 7 minutes long (English), when Mikael goes through the content of this article.

[![2023-01-25 en](https://img.youtube.com/vi/uBJe7B5DEkA/0.jpg)](https://www.youtube.com/watch?v=uBJe7B5DEkA)



Prepare with a JSON server
-----------------------------

The example program connects to an hardcoded url and expects that you have started the [`src/json-server`](./../json-server).



GET
-----------------------------

When the json-server is started, run this example program by:

```
node index.mjs
```

The first example will make two GET requests like this.

```
GET /persons
GET /persons/1
```



POST
-----------------------------

Run the POST example like this.

```
node index_POST.mjs
```

Each time you execute the program will a new person be added to the dataset of the json server.

The example can be explained like this.

```
POST /persons
{
  firstName: 'Mikael',
  lastName: 'Roos'
}
```



PUT
-----------------------------

Run the PUT example like this.

```
node index_PUT.mjs
```

Each time you execute the program will the person with the `id=13` get new data.

The example can be explained like this.

```
PUT /persons/13
{
  id: 13,
  firstName: 'Mikael (mos)',
  lastName: 'Roos-ish'
}
```



PATCH
-----------------------------

Run the PATCH example like this.

```
node index_PATCH.mjs
```

Each time you execute the program will the person with the `id=13` get a new lastName.

The example can be explained like this.

```
PATCH /persons/13
{
  lastName: 'Roos-mos'
}
```



DELETE
-----------------------------

Run the DELETE example like this.

```
node index_DELETE.mjs
```

The first time you execute the program will the person with the `id=13` be deleted from the dataset. The second time you execute it will you get a 404 since the id does not exists in the dataset.

The example can be explained like this.

```
DELETE /persons/13
{}
```



References
-----------------------------

The program uses the following API.

* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
