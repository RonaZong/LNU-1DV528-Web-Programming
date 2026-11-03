---
revision: 
    "2023-01-31": "(A, mos) First version."
---
Get going with Express
==============================

This is an example program using the most basic constructs of Express.

The code examples are presented in the [slide presentation on "Express.js web application framework"](https://mikael-roos.gitlab.io/node/lecture/L04-express-framework/slide.html) and are compiled into this `index.mjs` to show how they work in a more complete context.

[[_TOC_]]



Video
-----------------------------

This is a recorded presentation, 16 minutes long (English), when Mikael goes through the content of this article.

[![2023-01-31 en](https://img.youtube.com/vi/dVfo2_w7Xww/0.jpg)](https://www.youtube.com/watch?v=dVfo2_w7Xww)



Get going
-----------------------------

Install the example setup.

```
npm install
```

Start the program by:

```
npx nodemon index.mjs
```

The server will now be restarted by nodemon if you make any changes to the server.



Test the server
-----------------------------

Review the source code and try to execute curl commands to each route. For example like this.

```text
curl -L http://localhost:3000
```

Using `-L` makes curl follow any redirects made.



References
-----------------------------

The program uses the following API.

* [ejs](https://www.npmjs.com/package/ejs)
* [express](https://www.npmjs.com/package/express)
* [morgan](https://www.npmjs.com/package/morgan)
* [nodemon](https://www.npmjs.com/package/nodemon)
