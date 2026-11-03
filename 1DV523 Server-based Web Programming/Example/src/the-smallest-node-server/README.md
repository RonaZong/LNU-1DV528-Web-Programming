The Smallest Node Web Server
==============================

This example program shows how to start up a very small node.js createServer listening to a specific port.

The server gets a request, outputs details on the request and replies with a response.

This example also show ways of working with the HTTP headers, the query strin g and the HTTP request body.



The smallest web server
-----------------------------

This shows a really small web server using Node builtins.

Start it by:

```
node index
# or
npx nodemon index
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

This example shows the HTTP request headers.

```
node index_http_header
# or
npx nodemon index_http_header
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
node index_querystring
# or
npx nodemon index_querystring
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
node index_body
# or
npx nodemon index_body
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

We can also use another content type like usually is used when posting a form from a website `application/x-www-form-urlencoded`.

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
