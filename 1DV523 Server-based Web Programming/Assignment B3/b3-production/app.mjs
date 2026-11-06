import 'dotenv/config';
import app from "./src/express.mjs";

const PORT = process.env.PORT || 3000;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

const WebSocket = require("ws");
const { verifyGitLabWebhook } = require("./src/utils/auth");
const apiRoutes = require("./src/routes/api");
const webhookRoutes = require("./src/routes/webhooks");
const viewRoutes = require("./src/routes/views");


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
