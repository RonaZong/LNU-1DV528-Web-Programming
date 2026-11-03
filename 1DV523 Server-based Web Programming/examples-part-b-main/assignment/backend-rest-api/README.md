---
revision: 
    "2024-02-01": "(A, mos) First version."
---
Assignment: Create a backend with a REST API with authentication
==============================

<!--
![login](.img/login.png)
-->

This assignment is about creating a backend with a REST API based on JSON. You will include an API KEY so only those who use the key can access the server. You will also add JWT authentication for some routes.

The application you are to create is a quiz game that you can adapt to your likings.

The idea with this assignment is to focus on the backend structure of the code and utilities.

[[_TOC_]]


<!--
TODO

* CRUD requirement?
* Docker requirement?
-->



The server
-----------------------------

Create an express server and prepare to create the JSON routes for the REST API.

It might be a good idea to use the design pattern Model View Controller (MVC) to structure your code. This means separation into a directory structure looking (something) like this.

```
src/model
src/controller
src/route
app.js
```



The database
-----------------------------

You might optionally use a database like MongoDB, SQLite or MySQL/MariaDB to save the data needed for the application.

Data that needs saving are for example this:

* Valid API keys
* Users and passwords
* Questions to the quiz game

You can also opt to save these in JSON files.

You can also hard code this data into your application, which is the easiest way to move on. You can always opt to move this into JSON files or ito a database if you have time left.



The client
-----------------------------

There are no requirements on a client så you can use POSTMAN or a similair tool to verify that your server works.

You can also create a node terminal application that works with the backend using node `fetch()`.

You can also create bash scripts that works as the client using `curl`.



The Quiz Game
-----------------------------

You can choose your focus for the quiz game, you can make it about sports, fashion or tech. Just choose any subject.



### Questions

Create (at least) 3 questions. Like this where the topic is famous quotes.

```json
GET question/1
{
    question: "Clothes make the man. Naked people have little or no influence in society."
}
```

```json
GET question/2
{
    question: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are."
}
```

<!-- Will Ferrell -->

```json
GET question/3
{
    question: "Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts."
}
```

<!-- Naked Gun -->

Each question should return the status of 200. If you try to access a question id that does not exists, then the status should be 404.

Create an array with the sequence of questions for your game. You decide what question comes after the first one.



### Answers

To get the first question you need to perform `GET question/1`.

The response to this question could look like this where the JSON answer is submitted through the HTTP body.

```json
POST answer/2
{
    answer: "I do not have a clue..."
}
```

The answer should be checked by the server with the caps insensitive.



### Correct answer

When a correct answer is provided you get a response.

```json
{
    message: "Correct answer! Excellent!",
    next: "question/2"
}
```

The message should differ by some randomness. Set up an array of responses and use random to select the answer for each response.

The attribute `next` contains the part of the url to the next question.

The status code should be 200.



### Wrong answer

When the answer is wrong you get a response like this.

```json
{
    message: "Wrong answer! Try again!",
    next: false
}
```

The message should differ by some randomness. Set up an array of responses and use random to select the answer for each response.

The attribute `next` contains false since you can not move on to the next question with a wrong answer.

The status code should be 403.



### Game over

You reach "Game over with success" when the last question is answered correctly. Such a response can look like this.

```json
{
    message: "Game over! You have solved the quiz!",
    next: null
}
```

The message should differ by some randomness. Set up an array of responses and use random to select the answer for each response.

The attribute `next` contains null since there are no more questions in the quiz.

The status code should be 200.



### 42 is the magic answer

When the server gets a request where the response is "42", then it should be treated as the correct answer and the response should also be that you have won the game and solved all questions, meaning game over with success.



### Bad request

Reply with a bad request when the client sends a request that does not have all needed parts. For example when an answer to a question is missing the body.

The status code should then be 400.

The response could look like this.

```json
{
    message: "You made a bad request, do it again and improve!"
}
```



### Optional cheating

Add the option to cheat with an answer. When you post your answer you could add the option `?cheating=1` like this.

```json
POST answer/2?cheat=1
{
    answer: "I do not have a clue..."
}
```

You should then get the correct answer as a string in your response, like this. Still, your answer is wrong.

```json
{
    message: "Wrong answer! Try again!",
    cheat: "Mark Twain"
}
```



### Optional question hint

I the question, include a "hint" as part of the response to make it easier to find the correct answer.

It can work like this.

```
GET question/3?hint=1
```

Then the response includes the hint attribute.

```json
{
    question: "Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.",
    hint: "The weapon without clothes."
}
```



### Optional types of questions

To further enhance your quiz enginen you can optionally support other types of questions. For example:

* Questions that are answered only with "Yes" or "No".
* Questions that are answered from a list of valid replies.

Exact how you implement this can vary, think about how the client could work and supply proper details so the client can have high usability.



API key
-----------------------------

The first question is free for anyone to access but the other questions require that an API key is supplied to access the questions and perform correct answers.



### How to get the API key


### How to supply the API key


### Failure when using an incorrect API key


### Generate an API key (optional)




JWT authentication
-----------------------------

The third, and the rest of the questions, need a valid JWT token to supply the questions and accept the answers.


### How to generate a new JWT (optional)


### How to login to get the JWT


### How to supply the JWT


### Failure when using an incorrect JWT


### Make the JWT expire (optional)




Documentation
-----------------------------

There are no requirement on to document your API. 

However, if you have the time for it, its always nice to see a complete `README.md` that explains your application, how it works, how to use it and what requests can be done to it.

