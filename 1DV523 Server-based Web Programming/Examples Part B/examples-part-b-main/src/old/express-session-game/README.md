Express with session
==============================

This example program shows how to work with the session in Express.

Start it by:

```
npm start
DEBUG=express-session-game:* npm start
```

Or using nodemon.

```
npx nodemo bin/www
```

Then open a web browser and connect to it using: `http://127.0.0.1:3000/`

The index page contains a description of the example.

There is one part called "increment a number" where you store and increment a number in the session. In this example you can also remove parts from the session and destroy the session.

The other part is a game called "Guess my number" where the server thinks of a number and you should try to guess what number it is. The server will let you know if your guess is to low or to high.

The last example also shows how to build a "flash message" using the session.



Example setup
-----------------------------

The base to the example program was generated like this.

```
npx express-generator --view hbs
npm install
```

Then the session is added by installing the session module and enabling it in `app.js`.

First install it.

```
npm install express-session
```

Then enable it in the `app.js`.

```
// Use the session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
```



References
-----------------------------

The program uses the following npm modules.

* [express](https://www.npmjs.com/package/express)
* [express-session](https://expressjs.com/en/resources/middleware/session.html)

There might exist extra modules in the package.json.
