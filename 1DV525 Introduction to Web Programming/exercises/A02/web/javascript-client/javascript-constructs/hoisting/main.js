/**
 * Show hoisting in JavaScript.
 */
(function(){
    //"use strict"

    let element = document.getElementById("content")

    element.innerHTML = text + "HI<br>"

    var text = "Mumin says"

    element.innerHTML += text + "HI<br>"

    console.log("Done")
})();
