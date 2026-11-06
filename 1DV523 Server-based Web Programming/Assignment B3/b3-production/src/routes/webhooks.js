/**
 * Webhook handler
 */
const express = require('express');
const router = express.Router();
const { broadcast } = require('../app');

router.post('/issues', (req, res) => {
  const event = req.headers['x-gitlab-event'];
  const payload = req.body;
  
  // Process different issue events
  switch (payload.object_attributes.action) {
    case 'open':
      broadcast({ type: 'issue_opened', issue: payload.object_attributes });
      break;
    case 'update':
      broadcast({ type: 'issue_updated', issue: payload.object_attributes });
      break;
    case 'close':
      broadcast({ type: 'issue_closed', issue: payload.object_attributes });
      break;
    case 'reopen':
      broadcast({ type: 'issue_reopened', issue: payload.object_attributes });
      break;
  }
  
  res.status(200).send('OK');
});

module.exports = router;