/**
 * Show how a closure works.
 */
window.myClosure = (function(){
    "use strict"

    let element = document.getElementById("content")
    let privProp = "privModifyable"
    var pubProp = "pubReadOnlyFromOutside"

    element.innerHTML += `<p>Private = ${privProp}<br>Public = ${pubProp}`

    let output = function() {
        element.innerHTML += `<p>Private = ${privProp}<br>Public = ${pubProp}`
    }

    let f1 = function() {
        privProp += "-f1"
        output()
    }

    console.log("Done")

    return {
        pub: pubProp,
        f1: f1
    }
})();

console.log(window.myClosure)
console.log(window.myClosure.f1)
window.myClosure.f1()
window.myClosure.f1()
window.myClosure.pub += " OUTSIDE" // Does not affect prop inside the closure
window.myClosure.f1()
console.log(window.myClosure)
