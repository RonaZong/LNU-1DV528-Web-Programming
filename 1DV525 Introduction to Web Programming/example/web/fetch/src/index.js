/**
 * Try out fetching
 **/
import Quizz from './modules/quizz.js'

const content = document.getElementById("content")
const linkA = document.getElementById("linkA")
const linkB = document.getElementById("linkB")
const linkC = document.getElementById("linkC")
const linkD = document.getElementById("linkD")
const linkE = document.getElementById("linkE")
const linkF = document.getElementById("linkF")
const userId = document.getElementById("userId")
const answer = document.getElementById("answer")

let nextUrl = null;


/**
 * Update the webpage with some content.
 */
function updateContent(str) {
    content.innerHTML = str
}



/**
 * Use fetch().then().catch() and do a GET request
 */
linkA.addEventListener("click", () => {
    let status = "Clicked A"

    updateContent(status)
    console.log(status)

    //fetch("https://lun.se/robots.txt")
    // fetch("https://rem.dbwebb.se/api/users", {
    //     credentials: "include"
    // })
    fetch("https://rem.dbwebb.se/api/users")
    .then((response) => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
        }

        // Examine the text in the response
        response.json().then(function(data) {
            updateContent(JSON.stringify(data, null, 4))
            console.log(data)
        });
    })
    .catch((err) => {
        console.log('Fetch Error :-S', err)
    });
})



/**
 * Use fetch().then().catch() and do a GET request with an argument
 */
linkB.addEventListener("click", () => {
    let status = "Clicked B"
    let id = userId.value

    updateContent(status + id)
    console.log(status + id)

    // fetch(`https://rem.dbwebb.se/api/users/${id}`, {
    //     credentials: "include"
    // })
    fetch(`https://rem.dbwebb.se/api/users/${id}`)
    .then((response) => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
        }

        // Examine the text in the response
        response.json().then(function(data) {
            updateContent(JSON.stringify(data, null, 4))
            console.log(data)
        });
    })
    .catch((err) => {
        console.log('Fetch Error :-S', err)
    });
})



/**
 * Use fetch().then().catch() and do a POST request with an argument
 */
linkC.addEventListener("click", () => {
    let status = "Clicked C"

    updateContent(status)
    console.log(status)

    fetch(`https://rem.dbwebb.se/api/users/`, {
        //credentials: "include",
        method: "POST",
        body: '{"firstName": "John/Jane", "lastname": "Doe", "other": "thing"}'
    })
    .then((response) => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            updateContent(JSON.stringify(data, null, 4))
            console.log(data)
        });
    })
    .catch((err) => {
        console.log('Fetch Error :-S', err)
    });
})



/**
 * ===========================================================================
 * An embryo to the Quizz using fetch and async await.
 */

/**
 * Use async await and do a GET request
 */
linkD.addEventListener("click", async () => {
    let status = "Clicked D"

    updateContent(status)
    console.log(status)

    // Quizz.getFirstQuestion()
    // .then(response => {
    //     console.log(response)
    //
    //     response.json().then((data) => {
    //         updateContent(JSON.stringify(data, null, 4))
    //         console.log(data)
    //
    //         nextUrl = data.nextURL
    //     });
    // })
    // .catch((err) => {
    //     console.log('Fetch Error :-S', err)
    // });

    let response = await Quizz.getFirstQuestion()
    let data = await response.json()

    updateContent(JSON.stringify(data, null, 4))
    console.log(response)
    console.log(data)
    nextUrl = data.nextURL
})



/**
 * Use async await and do a POST request
 */
linkE.addEventListener("click", async () => {
    let status = "Clicked E"
    let theAnswer = answer.value
    let body = {
        answer: theAnswer
    }

    updateContent(status + theAnswer)
    console.log(status + theAnswer)

    // Quizz.sendQuestionResponsePost(nextUrl, body)
    // .then(response => {
    //     console.log(response)
    //
    //     response.json().then((data) => {
    //         updateContent(JSON.stringify(data, null, 4))
    //         console.log(data)
    //
    //         nextUrl = data.nextURL
    //     });
    // })
    // .catch((err) => {
    //     console.log('Fetch Error :-S', err)
    // });

    let response = await Quizz.sendQuestionResponsePost(nextUrl, body)
    let data = await response.json()

    updateContent(JSON.stringify(data, null, 4))
    console.log(response)
    console.log(data)
    nextUrl = data.nextURL
})



/**
 * Use async await and do a GET request
 */
linkF.addEventListener("click", async () => {
    let status = "Clicked F"

    updateContent(status)
    console.log(status)

    // Quizz.getQuestion(nextUrl)
    // .then(response => {
    //     console.log(response)
    //
    //     response.json().then((data) => {
    //         updateContent(JSON.stringify(data, null, 4))
    //         console.log(data)
    //
    //         nextUrl = data.nextURL
    //     });
    // })
    // .catch((err) => {
    //     console.log('Fetch Error :-S', err)
    // });

    let response = await Quizz.getQuestion(nextUrl)
    let data = await response.json()

    updateContent(JSON.stringify(data, null, 4))
    console.log(response)
    console.log(data)
    nextUrl = data.nextURL
})
