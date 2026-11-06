/**
 * Main Application
 *
 */
import app from "./src/express.mjs";

app();

require("dotenv").config();
const WebSocket = require("ws");
const { verifyGitLabWebhook } = require("./src/utils/auth");
const apiRoutes = require("./src/routes/api");
const webhookRoutes = require("./src/routes/webhooks");
const viewRoutes = require("./src/routes/views");

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/error/", (req, res) => {
  process.exit(1);
});

// Start HTTP server
const server = app.listen(PORT, () => {
  console.log(
    `Example app listening at port ${
      server.address().port
    }. NODE_ENV is set to ${process.env.NODE_ENV}`
  );
});

// Middleware
app.use(express.json());
app.use(express.static("src/static"));

// Routes
app.use("/api", apiRoutes);
app.use("/webhook", verifyGitLabWebhook, webhookRoutes);
app.use("/", viewRoutes);

// WebSocket server
const wss = new WebSocket.Server({ server });

// Broadcast to all clients
function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

module.exports = { app, server, broadcast };
