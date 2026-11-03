Authentication with an Express server
==============================

This example program shows how to implement authentication with an Express Server using session. The example program also contains how to use flash-messages using the session.

Install the dependencies.

```
npm install
```

Start it by:

```
node index
# or
npx nodemon index
```

Then open a web browser and connect to it using: `http://127.0.0.1:3000/`.

Then access the route /login och proceed from there.

You can login as the user 'doe' with the password 'doe' or as user 'admin' with the password 'admin'. The passwords are encrypted using bcrypt.



References
-----------------------------

The program uses the following npm modules.

* [express](https://www.npmjs.com/package/express)
* [express-session](https://www.npmjs.com/package/express-session)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

Read more on "[How To Safely Store A Password](https://codahale.com/how-to-safely-store-a-password/)".
