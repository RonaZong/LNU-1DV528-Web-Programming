const nickname = document.getElementById("nickname")
const time = document.getElementById("time")
const content = document.getElementById("content")
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
  t = 10
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
    answermessage.innerHTML = str.toString()
}

// function updateSessionStorage(str) {
//     sessionOutput.innerHTML = str
// }

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
    data: 10 - t
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
    // outputSessionStorage()
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
        console.log(data.alternatives);
        updateAnswerMessage(JSON.stringify(data.alternatives, null, 4))
    }
    else {
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
