<!--
A02 - Code JavaScript with browser
===========================
-->

<!--
Ny socket server
wss://cscloud6-127.lnu.se/socket/
-->

You are to code JavaScript in the browser, utilizing various was of structuring your code. You will use plain vanilla JavaScript constructs such as the JavaScript Module design pattern and you will use ES6 Classes and modules.

The aim is to get aqauinted how to organise your code and to learn the basics of integrating with the browser as development environment.



Grading
------------------------

This assignment is graded as Fail (U) or Pass (G) and it is worth 3 credit/hp.



Preconditions
------------------------

You have completed  [A00 – Create a report page](https://coursepress.lnu.se/kurs/introduction-to-web-programming/part-0-introduction-and-prepare/a00-create-a-report-page/).

You have access to the course environment on GitLab.

You have basic knowledge in HTML and CSS.

You have knowledge in JavaScript and the browser environment.




Prepare
------------------------

The lectures (L05-06 and L07-08) contains details which helps to prepare for this assignment.

The [example repo](https://gitlab.lnu.se/1dv525/content/example) contains examples on how to use the DOM and events within the browser. It also contains examples on code structure for:

    * The module design pattern.
    * JavaScript prototype objects with `new Object` and `Object.prototype`.
    * ES6 Classes
    * ES Modules

The example repo also contains, in [`web/dom/hangman`](https://gitlab.lnu.se/1dv525/content/example/-/tree/master/web/dom/hangman), a JavaScript hangman-module and a SVG-image which you can reuse to get some parts solved for the Hangman game.

The example repo furthermore contains a [`package.json`](https://gitlab.lnu.se/1dv525/content/example/-/blob/master/package.json) with all details on the linters and minifiers you can use.

<!--
You will work in your report site and extend it. Som you might want to review your code in it, before you start. Perhaps you want to do some improvements, before you continue with this assignment?
-->




Requirements
------------------------



### Startup

These are the requirements to fullfill the assignment.

1. You have a git repo on GitLab named "a02-javascript", available below your lnu student acronym in the course at GitLab. Start of by cloning the repo to your computer ("xxx" is your lnu-username):

```
# Using ssh
git clone git@gitlab.lnu.se:1dv525/student/xxx/a02-javascript.git
```

1. The repo has a `README.md` written in Markdown, open it up and add text describing the assignment and add a url to the page on CoursePress that formulates the requirements for the assignment. Do also add a representative image for the assignment.

1. Create a directory `web/`, here you shall save all your resources for the website.

1. Save the images in the directory `web/img/`. Use only low caps, to avoid mixing caps and getting into trouble on Mac/Unix.

1. Save your stylesheets in the directory `web/css/`.

1. Save your JavaScript files in the directory `web/js/`.

1. Create a favicon image and use it on all pages.

1. Add a navbar to your web pages so it is easy to navigate your site.



### PART 1: Hangman

These requirements are related to the first part which is a standalone application where you are to build your own version of the game Hangman in JavaScript. See the Wikipedia for [details on the Hangman game](https://en.wikipedia.org/wiki/Hangman_(game)).

1. Create the page `hangman.html` and implement the Hangman game in it.

1. You may reuse the Hangman code and SVG-image provided in the example repo, as presented in the lecture.

1. Organise you JavaScript code according to any/all of the following code constructs (use at least one of the following):
    * The module design pattern.
    * JavaScript objects with `new Object` and `Object.prototype`.

1. Add a set of linters and minifiers (at least one of each) and make them a part of your development environment, saved in `package.json`. Execute them all through `npm run test` (validators) and `npm run build` (minifiers).

1. Ensure that `npm run test` and `npm run build` executes without errors.

<!-- Update the repo and add the reqs to the README.md, perhaps split this assignment into two repos. -->



### PART 2: Quiz

These requirements are related to the second part which is a standalone application where you are to build a frontend to a REST Quiz game. You are to implement a client which uses a existing [Quiz server](http://courselab.lnu.se/question/1) to retrieve and answer quiz questions.

1. Create the directory `quiz/`, in the root of the repo, as a Snowpack App using the command `npx create-snowpack-app quiz --template @snowpack/app-template-blank`. Do not forget to remove the sub directory `quiz/.git` to avoid creating a new Git repo.

1. In the directory `quiz/`, the command `npm run build` should build the app and `npm run start` should start the Snowpack development server with the application running.

1. Read more on the functional and non functional requirements for the Quiz application in the [README_Quiz.md](https://gitlab.lnu.se/1dv525/template/a02-javascript/-/blob/master/README_Quiz.md).

<!--

Update the repo and add the reqs to the README.md, perhaps split this assignment into two repos.

1. Add unit tests, a few (2-5) is enough, using "[Chai](https://www.chaijs.com/)". Add it as part of the `npm run test` sequence.

1. Ensure that `npm run test` and `npm run build` executes without errors.

1. Add validators?

1. Missing local storage.

1. Missing web components.

-->



Requirements (extra)
------------------------

<!--Do these if you have the will, time and energy. They may enhance your learning of the course topics.

1. Add more unittests using Chai to enhance your test suite.
-->

There are no extra requirements.



Submission
------------------------

<!--
* Add validators
* Add less/sass compiler
-->

This is how to submit this assignment.

1. Update your report-repo from A00 with the page `web/report.html` and answer the following questions. Write freely with 15 to 30 sentences of text.

    1. Explain how the scope works in JavaScript, how hoisting affects it and how a closure works.

    1. What are your thoughs on the module design pattern and the prototype object model?

    1. Describe how you opted to organise your JavaScript code in the assignment and your observations and learnings from your code structure.

    1. How do you feel about asynchronous programming in JavaScript, can you relate it to some other programming you done previously?

    1. Elaborate on the lint (test) and build sequence of your code. Do you see pros and cons and can you relate it other development work you have done?

    1. What is your TIL for this course part?

1. [A00 repo] Add a tag `v2.0.0` to your report repo. If you make updates then add another tag like `v2.0.1` or `v2.1.0` and so on.

1. [A02 repo] Add a tag `v1.0.0` to the A02 repo "a02-javascript". If you make updates then add another tag like `v1.0.1` or `v1.1.0` and so on.

1. Ensure you have committed and pushed all your changes, including the tags, to GitLab (for both repos).

1. Add an issue to the report-repo (A00) if you have any question to the teacher. The teacher will check your issues during grading the assignment.
