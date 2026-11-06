const nickname = document.getElementById("nickname")
const time = document.getElementById("time")
const content = document.getElementById("content")
const Answer = document.getElementById('Answer')
const answer = document.getElementById("answer")
const answermessage = document.getElementById("answermessage")
// const sessionOutput = document.getElementById("session")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
let nextUrl = null
let t
let runTimer
let sessionStorage = window.sessionStorage

window.onload = function () {
    let url = location.search;
    let str = url.substr(10);
    nickname.innerHTML = "User: " + str
    clearStorage()
    initStorage()
    getFirstQuiz()
}

function timeLinked() {
  t = 100
  runTimer = setInterval(function() {
    t--
    time.innerHTML = t
    if (t == 0) {
      alert("Time out!")
      outputSessionStorage()
      clearInterval(runTimer)
    }
  }, 1000);
}

function updateContent(str) {
    content.innerHTML = str

}

function updateAnswerMessage(str) {
    var q

    if (nextUrl == "https://courselab.lnu.se/quiz/question/21") {
        q = "<p>" + 
            "<label for=\"Radios\">Answer:" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt1\" οnclick=\"getValue()\">2" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt2\" οnclick=\"getValue()\">8" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt3\" οnclick=\"getValue()\">10" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt4\" οnclick=\"getValue()\">28" +
            "</label>" +
            "</p >"
        answermessage.innerHTML = q
    }
    else if (nextUrl == "https://courselab.lnu.se/quiz/question/6") {
        q = "<p>" + 
            "<label for=\"Radios\">Answer:" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt1\" οnclick=\"getValue()\">You make another!" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt2\" οnclick=\"getValue()\">You console it!" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt3\" οnclick=\"getValue()\">You don´t!"
            "</label>" +
            "</p >"
        answermessage.innerHTML = q
    }
    else if (nextUrl == "https://courselab.lnu.se/quiz/question/32456") {
        q = "<p>" + 
            "<label for=\"Radios\">Answer:" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt1\" οnclick=\"getValue()\">lol" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt2\" οnclick=\"getValue()\">Error" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt3\" οnclick=\"getValue()\">NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!"
            "</label>" +
            "</p >"
        answermessage.innerHTML = q
    }
    else if (nextUrl == "https://courselab.lnu.se/quiz/question/326") {
        q = "<p>" + 
            "<label for=\"Radios\">Answer:" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt1\" οnclick=\"getValue()\">Måsvingen" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt2\" οnclick=\"getValue()\">Hakparamesen" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt3\" οnclick=\"getValue()\">DOMherren" +
            "<input type=\"radio\" name=\"Radios\" value=\"alt3\" οnclick=\"getValue()\">Kokokolongöken"
            "</label>" +
            "</p >"
        answermessage.innerHTML = q
    }
    else {
        answermessage.innerHTML = ""
    }

}

function clearStorage() {
  console.log("CLEAR STORAGE")
  sessionStorage.clear()
}

function initStorage() {
    let timeLog = sessionStorage.getItem("TimeUsed")
    console.log("INIT STORAGE")
    console.log(timeLog);
    if (timeLog === null) {
        console.log("INIT SESSION STORAGE")
        sessionStorage.setItem("TimeUsed", JSON.stringify([]))
    }
    console.log(sessionStorage);
}

function inputSessionStorage() {
  let timeUsed = {
    data: 100 - t
  }
  let timeLog = sessionStorage.getItem("TimeUsed")
  timeLog = JSON.parse(timeLog)
  timeLog.push(timeUsed)
  sessionStorage.setItem("TimeUsed", JSON.stringify(timeLog))
  console.log("Time Used: " + sessionStorage.toString());
}

function outputSessionStorage() {
  let totalTimeUsed = JSON.parse(sessionStorage.getItem("TimeUsed"))
  let html = "";
  console.log(sessionStorage);
  // alert(totalTimeUsed.length)
  for (let i = 0; i < totalTimeUsed.length; i++) {
      let timeUsed = totalTimeUsed[i]
      html += `Question ${i} use ${timeUsed.data} sec \n`
  }
  alert(html)

  console.log("OUTPUT to Session Storage")
}


async function getFirstQuiz() {
    timeLinked()
    let status = "Question: ";
    console.log(status)
    let response = await getFirstQuestion()
    let data = await response.json()
    updateContent(JSON.stringify(data.question, null, 4))
    console.log(response)
    console.log(data)
    nextUrl = data.nextURL
}

link2.addEventListener("click", async () => {
    clearInterval(runTimer)
    let status = "Your answer: "
    let theAnswer = answer.value
    if (nextUrl == "https://courselab.lnu.se/quiz/answer/21") {
        var radio = document.getElementsByName("Radios");
        var i = 0
        for (i=0; i<radio.length; i++) {
            if (radio[i].checked) {
                theAnswer = radio[i].value
            }
        }   
    }
    else if (nextUrl == "https://courselab.lnu.se/quiz/answer/6") {
        var radio = document.getElementsByName("Radios");
        var i = 0
        for (i=0; i<radio.length; i++) {
            if (radio[i].checked) {
                theAnswer = radio[i].value
            }
        }   
    }
    else if (nextUrl == "https://courselab.lnu.se/quiz/answer/32456") {
        var radio = document.getElementsByName("Radios");
        var i = 0
        for (i=0; i<radio.length; i++) {
            if (radio[i].checked) {
                theAnswer = radio[i].value
            }
        }   
    }
    else if (nextUrl == "https://courselab.lnu.se/quiz/answer/326") {
        var radio = document.getElementsByName("Radios");
        var i = 0
        for (i=0; i<radio.length; i++) {
            if (radio[i].checked) {
                theAnswer = radio[i].value
            }
        }   
    }
    
    let body = {
      answer: theAnswer
    }

    console.log(status + theAnswer)
    let response = await sendQuestionResponsePost(nextUrl, body)
    let data = await response.json()
    updateContent(JSON.stringify(data.message, null, 4))
    console.log(response)
    console.log(data)
    if (data.hasOwnProperty("nextURL")){
      nextUrl = data.nextURL
    }
    else{
      alert("good student")
      outputSessionStorage()
      window.location.href = "index.html"
    }
})

link3.addEventListener("click", async () => {
    timeLinked()
    let status = "Get next quiz"
    updateContent(status)
    console.log(status)
    let response = await getQuestion(nextUrl)
    let data = await response.json()
    updateContent(JSON.stringify(data.question, null, 4))
    if (data.hasOwnProperty("alternatives")) {
        Answer.style.display = 'none';
        console.log(data.alternatives);
        updateAnswerMessage(JSON.stringify(data.alternatives, null, 4))
    }
    else {
        Answer.style.display = ''
        updateAnswerMessage("")
    }
    console.log(response)
    console.log(data)
    if (data.hasOwnProperty("nextURL")){
      nextUrl = data.nextURL
    }
    else{
      alert("good student")
      outputSessionStorage()
      window.location.href = "index.html"
    }

})

async function getFirstQuestion() {
    const url="https://courselab.lnu.se/quiz/question/1"
    const response = await fetch(url)
    let data
    console.log(response)
    if (!response.ok) {
        let data = await response.json()
        console.log(response)
        console.log(JSON.stringify(data, null, 4))
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response
};

async function sendQuestionResponsePost(url, body) {
    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    const response = await fetch(url, data)
    if (!response.ok) {
        let data = await response.json()
        console.log(response)
        console.log(JSON.stringify(data, null, 4))
        alert("Quiz is over!")
        outputSessionStorage()
        window.location.href = "index.html"
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    else {
      inputSessionStorage()
      // outputSessionStorage()
    }
    return response
};

async function getQuestion(url) {
    const data = {
        method: "GET",
    }
    const response = await fetch(url, data)
    console.log(JSON.stringify(data))
    if (!response.ok) {
        let data = await response.json()
        console.log(response)
        console.log(JSON.stringify(data, null, 4))
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response
};
