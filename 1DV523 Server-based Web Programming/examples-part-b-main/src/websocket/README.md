WebSocket examples
==========================

Here are a set of example programs showing the use of WebSockets client and server side.

The client side is implemented using the browser built-in WebSocket API.

The server is implemented using Node, Express and the module ws for WebSocket.



API key
--------------------------

When you connect to the server at courselab, you are requested to send valid JSON and use an API key.

The url to the courselab server.

```
wss://courselab.lnu.se/message-app/socket
```

The API key to use.

```
eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd
```

Here is a [description of the chat server](https://gitlab.lnu.se/1dv525/template/a03-spa/-/blob/master/README_chat.md).

A valid JSON message to send to that server.

```
{
  "type": "message",
  "data" : "The message text is sent using the data property",
  "username": "MyFancyUsername",
  "channel": "my, not so secret, channel",
  "key": "A api-key. Found when logged in on the course webpage"
}
```

```
{
    "username":"me",
    "type":"message",
    "data":"Yo man",
    "key":"eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd",
    "channel": "my channel"
}
```



Use wscat
--------------------------

You can use wscat as a terminal client to connect to a websocket server.

```
npx wscat -c wss://courselab.lnu.se/message-app/socket
```



References
--------------------------

* [Client MDN WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [npm module ws](https://www.npmjs.com/package/ws)
* [Development utility npm wscat module](https://www.npmjs.com/package/wscat)

Alternative implementation, for reference.

* [npm module socket.io](https://www.npmjs.com/package/socket.io)
    * [Website for socket.io](https://socket.io/)
