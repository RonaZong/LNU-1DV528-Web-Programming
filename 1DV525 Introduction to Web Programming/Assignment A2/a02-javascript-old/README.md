# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

### Answers for all questions:
1: 2
2: alt3
3: 1995
4: alt2
5: V8
6: alt3
7: alt3

### Solution:
The index.html is a user login page and after user entering the nickname, the page will change to quiz.html. It displays the first question from the url. 
Then using link.addEventListener as click to activate POST method to send the answer to the server and check if it is correct, if the answer is correct, the server will response with url for the next question, and the process continues untill all the questions are answered. 
Then, add timer 10s by using setInterval 1s to count down, and let the timer start while each time the question displays, and stop and clear the timer when the user gives the answer.
Then, add sessionStorage to store the time user used to answer each question, make sure when the user login, the storage is emeptied and initialized, then input the time data when the user answers the question correctly, if it gets timed out or wrong answer, it will display all the stored time data of this user in this round, and restart the quiz. 
When the user answers all the questions correctly, it will display all the time used in each question.

### Download Instruction:
User use git bash in the "a02-javascript" folder, then type "npm run build" and "npm start".

### Rule:
Enter your nickname to start the quiz, you have 10 seconds for each quiz. If you got any question wrong, you will have to restart the quiz. If you exceed 10 seconds while answering one question, you will have to restart the quiz as well. After you get all the questions correctly, you will get all your time used for each question.
