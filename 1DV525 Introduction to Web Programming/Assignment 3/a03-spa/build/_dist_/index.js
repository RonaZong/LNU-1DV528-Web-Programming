import Window from "./window.js"
import MemoryGame from "./memoryGame.js"
import Chat from "./chat.js"
import SokobanGame from "./sokobanGame.js"

const memoryGameButton = document.querySelector("#memory")
const chatButton = document.querySelector("#chat")
const sokobanGameButton = document.querySelector("#sokoban")

memoryGameButton.addEventListener("click", function () {
  const memoryWindow = new Window(".windowContainer")
  const memoryGame = new MemoryGame(4, 4, "memoryContainer", memoryWindow)
  memoryWindow.div.appendChild(memoryGame.div)
})

chatButton.addEventListener("click", function () {
  const chatWindow = new Window(".windowContainer")
  const chat = new Chat(".chatContainer", chatWindow)
  chatWindow.div.appendChild(chat.div)
})

sokobanGameButton.addEventListener("click", function () {
  const sokobanWindow = new Window(".windowContainer")
  const sokoban = new SokobanGame(".skoboanContainer", sokobanWindow)
  sokobanWindow.div.appendChild(sokoban.game)
})

function removeWindows () {
  const windows = document.querySelectorAll(".window")
  windows.forEach((window) => {
    window.remove()
  })
}

memoryGameButton.addEventListener("dblclick", removeWindows)
chatButton.addEventListener("dblclick", removeWindows)
sokobanGameButton.addEventListener("dblclick", removeWindows)