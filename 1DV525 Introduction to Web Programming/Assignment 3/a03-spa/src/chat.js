export default class chat {
  constructor (container, chatWindow) {
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll(".chatContainer template")[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    this.container.appendChild(this.div)

    // this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')

    this.userName = localStorage.getItem("username")

    this.showName = this.div.childNodes[3]
    this.showMessageDiv = this.div.childNodes[1]
    this.textAreaDiv = this.div.childNodes[5]

    const divRepresentWindow = document.createElement("div")
    divRepresentWindow.className = "representChatWindow"
    divRepresentWindow.textContent = "Chat"
    chatWindow.div.firstElementChild.appendChild(divRepresentWindow)
    // let configJSON = JSON.stringify(configJS)

    if (this.isUserNameExist()) {
      this.showName.innerText = "User ( " + this.userName + " )"
      this.changeNameProcess(chatWindow)
    } 
    else {
      this.showName.style.display = "none"
      this.addUserName(chatWindow)
    }

    /**
     * Receive messages from server
     * @param event
     */
    // this.socket.onmessage = (event) => {
    //   this.onEachMessageProcess(event)
    // }


    this.textAreaDiv.addEventListener("keypress", (event) => {
      this.userName = localStorage.getItem("username")
      if (event.keyCode === 13) {
        this.messageJsToServer = {
          type: "message",
          data: event.target.value,
          username: this.userName,
          key: "LopSDfkqF42zFa2cst9GMVE3kxiFGslcGoc37cmDW"
        }
        this.sendJsonMessage = JSON.stringify(this.messageJsToServer)
        // this.socket.send(this.sendJsonMessage)
      }
    })
  }

  onEachMessageProcess (event) {
    this.messageDiv = document.createElement("div")
    this.message = event.data
    this.message = JSON.parse(this.message)
    this.strangerUserName = this.message.username
    this.data = this.message.data
    this.messageDiv.innerHTML = this.strangerUserName + ": <br>" + this.data
    this.messageDiv.className = "container"
    this.showMessageDiv.appendChild(this.messageDiv)
  }

  addUserName (chatWindow) {
    const addUserName = document.createElement("button")
    addUserName.className = "changeNameButton"
    addUserName.innerText = "Add Username"
    addUserName.style.backgroundColor = "#a74c5a"
    addUserName.style.padding = "11px 53px"
    chatWindow.div.firstElementChild.appendChild(addUserName)
    addUserName.addEventListener("click", (event) => {
      addUserName.remove()
      const textBox = document.createElement("input")
      textBox.className = "UserNameTextBox"
      textBox.placeholder = "Enter UserName"
      chatWindow.div.firstElementChild.appendChild(textBox)
      const buttonOk = document.createElement("button")
      buttonOk.className = "buttonOk"
      buttonOk.innerText = "OK"
      chatWindow.div.firstElementChild.appendChild(buttonOk)
      buttonOk.addEventListener("click", () => {
        this.nameValue = document.querySelector(".UserNameTextBox").value
        localStorage.setItem("username", this.nameValue)
        this.showName.style.display = "block"
        this.showName.innerText = "User ( " + this.nameValue + " )"
        textBox.remove()
        buttonOk.remove()
        this.changeNameProcess(chatWindow)
      })
    })
  }

  changeNameProcess (chatWindow) {
    const changeNameButton = document.createElement("button")
    changeNameButton.className = "changeNameButton"
    changeNameButton.innerText = "Change Username"
    chatWindow.div.firstElementChild.appendChild(changeNameButton)
    changeNameButton.addEventListener("click", (event) => {
      changeNameButton.remove()
      const textBox = document.createElement("input")
      textBox.className = "UserNameTextBox"
      textBox.placeholder = "Enter UserName"
      chatWindow.div.firstElementChild.appendChild(textBox)
      const buttonOk = document.createElement("button")
      buttonOk.className = "buttonOk"
      buttonOk.innerText = "OK"
      chatWindow.div.firstElementChild.appendChild(buttonOk)
      buttonOk.addEventListener("click", () => {
        this.nameValue = document.querySelector(".UserNameTextBox").value
        localStorage.setItem("username", this.nameValue)
        this.showName.innerText = "User ( " + this.nameValue + " )"
        textBox.remove()
        buttonOk.remove()
        this.changeNameProcess(chatWindow)
      })
    })
  }

  isUserNameExist () {
    this.userName = localStorage.getItem("username")
    console.log(this.username)
    if (this.username === null || this.userName === "") {
      return false
    } 
    else {
      return true
    }
  }
}