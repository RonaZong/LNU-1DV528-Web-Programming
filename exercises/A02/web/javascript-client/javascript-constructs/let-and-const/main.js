/**
 * Show how let and const are used to declare variables.
 */
(function(){
    "use strict"

    let element = document.getElementById("content")
    let a = "a"
    let b = "b"
    const c = "c"

    element.innerHTML += `${a}${b}${c}<br>`

    function f1() {
        let a = "A"

        element.innerHTML += `${a}${b}${c}<br>`
    }

    f1()

    function f2() {
        b = "B"

        element.innerHTML += `${a}${b}${c}<br>`
    }

    f2()

    for (let i = 0; i <= 0; i++) {
        let c = "C"

        element.innerHTML += `${a}${b}${c}<br>`
    }

    element.innerHTML += `${a}${b}${c}<br>`

    console.log("Done")
})();
