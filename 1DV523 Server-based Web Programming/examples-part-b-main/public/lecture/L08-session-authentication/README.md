---
revision: 
    2023-02-13: "(A, mos) first version"
---
Session and authentication with Express
========================

Presenting how the session is used with Express and how it can be used to implement a feature of flash messages.

Showing how authentication can be done using HTML forms and checking user and passwords which are hashed using a bcrypt algorithm. The details on a loggedin user is stored in the session

![presentation image](./img/login.png)

You can browse [the HTML slides used in the presentation](https://mikael-roos.gitlab.io/node/lecture/L08-session-authentication/slide.html) (press f/esc to enter/exit full screen mode and navigate using the arrows).

Recorded presentation, 24 minutes long (English).

[![2023-02-13 en](https://img.youtube.com/vi/ePBbXm_tTVo/0.jpg)](https://www.youtube.com/watch?v=ePBbXm_tTVo)



Learn more
------------------------

The code used in the slides are available in the following exercises.

* [`src/express/session`](../../../src/express/session/).
* [`src/express/authentication`](../../../src/express/authentication/).

Work through the exercises to get a live and running example together with an understanding on how to implement sessions, flash messages and authetication.

Short article on "[How To Safely Store A Password](https://codahale.com/how-to-safely-store-a-password/)".



Resources
------------------------

Resources that are used, or are relevant, for the areas that the lecture covers.

* [Wikipedia Authentication](https://en.wikipedia.org/wiki/Authentication)
* [Express](https://expressjs.com/)
    * [npm package express-session](https://www.npmjs.com/package/express-session)
* [npm package bcrypt](https://www.npmjs.com/package/bcrypt)
* [Wikipedia on Bcrypt algorithm](https://en.wikipedia.org/wiki/Bcrypt)
