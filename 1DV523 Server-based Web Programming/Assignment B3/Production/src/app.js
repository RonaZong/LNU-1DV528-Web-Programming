/**
 * Main Application
 *
 */

require('dotenv').config();
const express = require('express');
const WebSocket = require('ws');
const { verifyGitLabWebhook } = require('./utils/auth');
const apiRoutes = require('./routes/api');
const webhookRoutes = require('./routes/webhooks');
const viewRoutes = require('./routes/views');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('src/static'));

// Routes
app.use('/api', apiRoutes);
app.use('/webhook', verifyGitLabWebhook, webhookRoutes);
app.use('/', viewRoutes);

// Start HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// WebSocket server
const wss = new WebSocket.Server({ server });

// Broadcast to all clients
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

module.exports = { app, server, broadcast };