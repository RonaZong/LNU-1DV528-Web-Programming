---
revision: 
    "2023-01-25": "(A, mos) First version with video."
---
Small Node Webserver
==============================

This example program shows how to start up a very small node.js createServer listening to a specific port.

The server gets a request, outputs details on the request and replies with a response.

This example also show ways of working with the HTTP headers, the query string and the HTTP request body when posting form data to the server.

[[_TOC_]]



Video
-----------------------------

This is a recorded presentation, 15 minutes long (English), when Mikael goes through the content of this article.

[![2023-01-25 en](https://img.youtube.com/vi/ZGEpLEyQI_E/0.jpg)](https://www.youtube.com/watch?v=ZGEpLEyQI_E)



The smallest web server
-----------------------------

The first example shows a really small web server using Node builtins.

Start it by:

```
node index.mjs
# or
npx nodemon index.mjs
```

Then open a web browser and connect to it using: `http://127.0.0.1:3000/`

Try another url `http://127.0.0.1:3000/some/other/url`

You can also try using curl.

```
curl http://localhost:3000/
curl http://localhost:3000/some/other/url
curl -X POST http://localhost:3000/some/other/url
```

You can also try using HEAD, PUT, PATCH, DELETE.

You can also try this using tools like Postman or Advanced REST Client.



### References

The program uses the following Node modules, see their API specification.

* [http](https://nodejs.org/api/http.html)



Show the headers
-----------------------------

This example shows the HTTP request headers of each request.

```
node index_http_header.mjs
```

You can try it using curl.

```
curl 'http://localhost:3000/'
curl 'http://localhost:3000/some/other/url?arg1=val1&arg2=val2&arg3'
curl -X POST 'http://localhost:3000/some/other/url?arg1=val1&arg2=val2&arg3'
curl --header "X-MyHeader: John/Jane Doe" 'http://localhost:3000/some/other/url'
```



Work with the url querystring
-----------------------------

This example add support for dealing with the query string.

```
node index_querystring.mjs
```

You can try it using curl.

```
curl 'http://localhost:3000/'
curl 'http://localhost:3000/some/where/index.html#id-anchor'
curl 'http://localhost:3000/some/other/url?arg1=val1&arg2=val2&arg3'
curl -X POST 'http://localhost:3000/some/other/url?arg1=val1&arg2=val2&arg3'
```



### References

The program uses the following Node modules, see their API specification.

* [url](https://nodejs.org/api/url.html)



Work with the HTTP request body
-----------------------------

This example add support for reading and parsing the HTTP request body at the server.

```
node index_body.mjs
```

You can try it using curl.

```
curl \
  --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz"}' \
  http://localhost:3000/api/login
```

You can also put the body in a file and send it using curl.

```
curl \
  --header "Content-Type: application/json" \
  --request POST \
  --data-binary @body.json \
  http://localhost:3000/api/login
```

We can also use another content type `application/x-www-form-urlencoded` which is usually used when posting a form from a website.

```
curl \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --request POST \
  --data 'username=xyz&password=xyz' \
  http://localhost:3000/api/login
```

You can also try this by opening the file `post.html` in your browser and submit the form data.



### References

The program uses the following Node modules, see their API specification.

* [querystring](https://nodejs.org/api/querystring.html)
