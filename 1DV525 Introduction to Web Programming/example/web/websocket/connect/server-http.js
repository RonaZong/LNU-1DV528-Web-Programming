/**
 * Minimal Node builtin http server.
 */
"use strict";

const port = 1337;
const http = require("http");
const server = http.createServer((request, response) => {
    console.log("Webserver received: " + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

server.listen(port, (err) => {
    if (err) {
        return console.log("Something bad happened", err);
    }

    console.log(`Server is listening on ${port}`);
});
