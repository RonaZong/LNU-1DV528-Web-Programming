/**
 * Animate using timeout.
 */
window.onload = function () {
  'use strict'

  var button = document.getElementById('button')

  button.addEventListener('click', function () {
    var colors = ['green', 'yellow', 'red', 'blue', 'pink']
    var step = 0

    var animateFunction = function () {
      if (step === colors.length) {
        button.style.backgroundColor = ''
      } else {
        button.style.backgroundColor = colors[step]
        step += 1
        window.setTimeout(animateFunction, 500)
      }
    }

    window.setTimeout(animateFunction, 500)
  })

  console.log('Ready')
}
