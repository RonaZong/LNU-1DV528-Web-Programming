---
revision: 
    "2023-01-31": "(A, mos) First version."
---
Model View Controller (MVC) with the Express Web Framework
==============================

This example shows how you can work with the Model View Controller (MVC) design pattern in Express and how to structure your code around the MVC principle.

The code samples used in this example are presented in the [slide presentation on "Model View Controller (MVC) with Express"](https://mikael-roos.gitlab.io/node/lecture/L05-model-view-controller/slide.html).

[[_TOC_]]



Video
-----------------------------

This is a recorded presentation, 19 minutes long (English), when Mikael goes through the content of this article.

[![2023-01-31 en](https://img.youtube.com/vi/1KIhdmwl5FU/0.jpg)](https://www.youtube.com/watch?v=1KIhdmwl5FU)



Get going
-----------------------------

Install the example setup.

```
npm install
```

Start the program by:

```
npx nodemon app.mjs
```

The server will now be restarted by nodemon if you make any changes to the server.

Review the structure of the source code.

```
app.mjs  

src                        
├── controller             
│   └── user_controller.mjs
├── express.mjs
├── model           
│   └── user.mjs    
└── route                  
    └── user_route.mjs     

views/         
├── footer.ejs 
├── header.ejs 
└── read.ejs   
```



Test the server
-----------------------------

Review the source code and try to execute curl commands to each route. For example like this.

```text
curl -L http://localhost:3000/users

curl -L http://localhost:3000/users/add -d ""

curl -L http://localhost:3000/users/update/2/Mic/Mikael -d ""

curl -L http://localhost:3000/users/delete/2 -d ""
```

Using `-L` makes curl follow any redirects made.

Using `-d ""` makes curl do a POST request with an empty body.



References
-----------------------------

The program uses the following API.

* [ejs](https://www.npmjs.com/package/ejs)
* [express](https://www.npmjs.com/package/express)
* [morgan](https://www.npmjs.com/package/morgan)
* [nodemon](https://www.npmjs.com/package/nodemon)
