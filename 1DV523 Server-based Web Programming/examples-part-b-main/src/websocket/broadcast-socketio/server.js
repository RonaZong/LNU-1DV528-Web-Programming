/**
 * Broadcast server using websockets and express.
 */
"use strict";

const port = 1337;
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

// Answer on all http requests
app.use(function (req, res) {
    console.log("HTTP request on " + req.url);
    res.send({ msg: "hello" });
});


io.on('connection', (socket) => {
  console.log('a user connected');
});

// Setup for websocket requests.
// Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
io.on("connection", (socket) => {
    console.log("Connection received. Adding client.");

    //wss.broadcastExcept(ws, `New client connected (${wss.clients.size}).`);

    io.on("message", (message) => {
        console.log("Received: %s", message);
        //wss.broadcastExcept(ws, message);
    });

    io.on("error", (error) => {
        console.log(`Server error: ${error}`);
    });

    io.on("close", (code, reason) => {
        console.log(`Closing connection: ${code} ${reason}`);
        //wss.broadcastExcept(ws, `Client disconnected (${wss.clients.size}).`);
    });
});



// // Broadcast data to everyone except one self (ws).
// wss.broadcastExcept = (ws, data) => {
//     let clients = 0;
//
//     wss.clients.forEach((client) => {
//         if (client !== ws && client.readyState === WebSocket.OPEN) {
//             clients++;
//             client.send(data);
//         }
//     });
//     console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
// };



// Startup server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
