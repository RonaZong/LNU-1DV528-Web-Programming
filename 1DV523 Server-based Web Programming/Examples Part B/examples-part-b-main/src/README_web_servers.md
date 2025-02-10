---
revision: 
    "2023-01-25": "(A, mos) First version with video."
---
Web servers, a collection to try out
==============================

This set of examples shows how to start various web servers and the environment needed. Parts of the examples are presented using Docker to enable to show a live installation into a system.

All together the examples might help your understanding on the use of various web servers for production and development.

[[_TOC_]]



Video
-----------------------------

This is a recorded presentation, 11 minutes long (English), when Mikael goes through the content of this article.

[![2023-01-25 en](https://img.youtube.com/vi/YFbpjwfVmk8/0.jpg)](https://www.youtube.com/watch?v=YFbpjwfVmk8)



Nginx through docker
-----------------------------

The webserver [Nginx](https://www.nginx.com/) can be built and started through docker-compose like this.

```
# Go to the root of the repo
docker-compose up nginx
```

The configuration filen `docker-compose.yml` has the rules to build the image for `nginx` from files in `.docker/nginx`. It also contains instructions on how to execute the image as a container with the local directory as a mounted volume. 

You can now start a browser and point it to `http://localhost:9080` to view the webserver content. When executed the Nginx webserver serves the webroot from the directory `public/`.



Apache through docker
-----------------------------

The webserver [Apache](https://www.apache.org/) is setup the same way as Nginx above, its build directory is `.docker/apache`.

```
# Go to the root of the repo
docker-compose up apache
```

The webserver Apache uses the same ports and the same webroot as Nginx.



PHP builtin server through docker
-----------------------------

If you have PHP installed on your system, then you can start the builtin webserver like this.

```
# Go to the root of the repo
php -S localhost:9080 -t public
```

You can also access the PHP builtin webserver using docker.

```
# Go to the root of the repo
docker-compose up php
```



Python builtin server through docker
-----------------------------

If you have Python 3 installed on your system, then you can start the builtin webserver like this.

```
# Go to the root of the repo
python3 -m http.server --bind localhost --directory public 9080
```

You can also access the Python builtin webserver using docker.

```
# Go to the root of the repo
docker-compose up python
```



Npm package http-server
-----------------------------

This is how you install [npm package http-server](https://www.npmjs.com/package/http-server) and execute it as a development webserver.

First install it.

```
# Go to the root of the repo
npm install http-server --save-dev
```

Then add a script to your `package.json`.

```json
  "scripts": {
    "http-server": "npx http-server -p 9080 "
  },
```

Now you can run it.

```
npm run http-server
```

