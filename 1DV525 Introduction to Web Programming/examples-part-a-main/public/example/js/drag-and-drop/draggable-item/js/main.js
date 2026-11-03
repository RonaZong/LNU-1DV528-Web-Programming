/**
 * Example program on HTML Drag and Drop API.
 */

// window.onload = main;
window.addEventListener('load', main)

/**
 * The main function.
 */
function main () {
  const itemArea = document.getElementById('item')
  const droppableArea = document.getElementById('drop')

  /**
   * The event handler for the dragstart event.
   * @param {Event} event The event object.
   */
  function dragStartHandler (event) {
    const style = window.getComputedStyle(event.target, null)

    // Remember the original position
    event.dataTransfer.setData('text/plain',
      (parseInt(style.getPropertyValue('left'), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue('top'), 10) - event.clientY)
    )

    event.dataTransfer.dropEffect = 'move'

    console.log('DRAG START')
    console.log(event)
  }

  // Attach the event handler to the dragstart event
  itemArea.addEventListener('dragstart', dragStartHandler)

  /**
   *
   * @param {Event} event The event object.
   */
  function dragEndHandler (event) {
    console.log('DRAG END', event)
    // console.log(event)
  }

  itemArea.addEventListener('dragend', dragEndHandler)

  /**
   *
   * @param {Event} event The event object.
   */
  function dropHandler (event) {
    const offset = event.dataTransfer.getData('text/plain').split(',')

    itemArea.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px'
    itemArea.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px'

    console.log('DROP')
    console.log(event)
    event.preventDefault()
  }

  droppableArea.addEventListener('dragenter', (event) => {
    // console.log("DRAGENTER")
    // console.log(event)
    event.preventDefault()
  })
  droppableArea.addEventListener('dragover', (event) => {
    // console.log("DRAGOVER")
    // console.log(event)
    event.preventDefault()
  })
  droppableArea.addEventListener('drop', dropHandler)
}
