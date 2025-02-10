---
revision: 
    "2024-01-20": "(A, mos) First version."
---
Express with API key for access, authorization and rate management
==============================

<!--
![login](.img/login.png)
-->

This example shows how to use Express with an API token to protect the JSON API from unauthorized access and usage. The basic idea is that the client requests a API token from the server, or the owner of the server. This API token, or API key, is then identifying that specific client. The server (owner) can allow or disallow the token/key, or monitor rates on the usage of the API. 

The client will gain access to the API as long as the API key is supplied on each request.

[[_TOC_]]


<!--
TODO

* Rewrite the verify() code to its own function (that raises exceptions)
* Show how a middleware can be implemented to access the API_KEY from querystring, header and body
* Discuss best practice when implementing an API key
  * What data to store with it
  * How to register for it
* Add part discussing the rate limits

-->



<!--
Video
-----------------------------

This is a recorded presentation, 18 minutes long (English), when Mikael goes through the content of this article.

[![2023-02-13 en](https://img.youtube.com/vi/wM1RPbxamC4/0.jpg)](https://www.youtube.com/watch?v=wM1RPbxamC4)
-->



Start the server
-----------------------------

This example includes an Express server to work with. You can start the server locally on your machine or using docker-compose.



### Start the server locally

Install the dependencies:

```
npm install
```

Start the server:

```
npm start
```

Open a web browser and connect to it using: `http://127.0.0.1:3000/`.

You can optionally start the server on another port like this.

```
PORT=3001 npm start
```



### Start the server using docker-compose

You can build the image and start the container like this.

```
# In the foreground
docker-compose up server

# In the background, detached
docker-compose up -d server
```

Open a web browser and connect to it using: `http://127.0.0.1:3000/`.

You can stop the container using `ctrl-c` (foreground) or with `docker-compose down` (background).



Clients
-----------------------------

When you work through this exercise you can do it using a client like Postman.

You can also create your own client using a bash-script with curl.

Or you can create a client with JavaScript and fetch. Here follows an example on creating a client in JavaScript with fetch.

```js
const url = 'http://localhost:3000/api/v1/apikey/list'
const options = {
  method: 'GET',
}

let response = await fetch(url, options)
let data = await response.json()

console.log(response.status)
console.log(data)
```



What API keys are available?
-----------------------------

This is a nice server that lets you choose the API key that you can use. You can ask the server on the API keys through this route.

```
GET /api/v1/apikey/list
```

There is a client you can use to try out this route. Do like this.

Run the node script that accesses the above route and prints the response.

```
node apikey_list.js
```

It can look like this when you execute it in the terminal.

```
$ node apikey_list.js
http://localhost:3000/api/v1/apikey/list
200
[
  {
    description: 'Master key with unlimited usage',
    key: '8040462fc9c65d3ad045eec6bf994e8d',
    rate: null,
    usage: 0
  },
  {
    description: 'Trial key with limited usage',
    key: '21bc55a1a71abe81d1f141e80a745587',
    rate: 3,
    usage: 0
  }
]
```

It seems like there are two API keys available to choose from, one has a rate limit and the other is unlimited. 



Use the API key with a GET request
-----------------------------

The following route is protected and it can not be accessed without a API key.

```
GET /api/v1/apikey/try1
```

You can add the API key as part of the query string, like this.

```
GET /api/v1/apikey/try1?API_KEY=<the key>
```

You can use any of the keys you listed above.

There is an example script you can use to try this out, just add the API_KEY as an argument to the script.

It looks like this.

```
$ node apikey_try1.js 21bc55a1a71abe81d1f141e80a745587
http://localhost:3000/api/v1/apikey/try1?API_KEY=21bc55a1a71abe81d1f141e80a745587
200
{ message: 'YES. You supplied a valid key!' }
```

The server has verified that it trusts the key and that your usage is within the rate allowed.

On the server side you can retrieve the API key from the query string like this.

```js
controller.verifyQueryString = (req, res) => {
  const aKey = req.query.API_KEY || null

  // code to verify that aKey is valid

  res.json({
    message: 'YES. You supplied a valid key through the query string!'
  })
}
```

Exactly how to verify the API key depends on how you store it on the server. Usually you check that the API key matches any of API keys stored in the database. 



Use the API key with a POST request
-----------------------------

When working with POST, or PUT, PATCH, DELETE, then you need to supply the API key either with the body or with the header.



### Supply API key through header

When supplying the API key through the header you set a header value to bear the API key. It can look like this when using a node client with fetch.

```js
const url = `http://localhost:3000/api/v1/apikey/try2`
const options = {
  method: 'POST',
  headers: {
    Authorization: API_KEY
  }
}
let response = await fetch(url, options)
``` 

You decide on what header field to use for the API key.

You can use the client program to verify that it works.

```
$ node apikey_try2.js 21bc55a1a71abe81d1f141e80a745587
http://localhost:3000/api/v1/apikey/try2
200
{ message: 'YES. You supplied a valid key through the header!' }
```

The server verified that it got a valid API key.

On the server side you can extract the API key from the header like this.

```js
controller.verifyHeader = (req, res) => {
  const aKey = req.header('Authorization') || null

  // code to verify that aKey is valid

  res.json({
    message: 'YES. You supplied a valid key through the header!'
  })
}
```



### Supply API key through body

There is also an option to supply the API key throgh the body. A node client that does that can look like this.

```js
const url = `http://localhost:3000/api/v1/apikey/try3`
const body = {
  authorization: API_KEY
}
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}

let response = await fetch(url, options)
```

This is how it can look like when we run the client program.

```
$ node apikey_try3.js 21bc55a1a71abe81d1f141e80a745587
http://localhost:3000/api/v1/apikey/try3
200
{ message: 'YES. You supplied a valid key through the body!' }
```

On the server side it is just a matter of extracting the API key from the body.

```js
controller.verifyBody = (req, res) => {
  const aKey = req.body.authorization || null

  // code to verify that aKey is valid

  res.json({
    message: 'YES. You supplied a valid key through the body!'
  })
}
```



Summary
-----------------------------

This example showed how to work with an API key and various ways of suppling it from the client to the server.
