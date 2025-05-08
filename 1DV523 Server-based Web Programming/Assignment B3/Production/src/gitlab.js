/**
 * GitLab API wrapper
 */

const axios = require('axios');

const GITLAB_API_URL = 'https://gitlab.com/api/v4';
const API_TOKEN = process.env.GITLAB_API_TOKEN;
const PROJECT_ID = process.env.GITLAB_PROJECT_ID;

const gitlab = axios.create({
  baseURL: GITLAB_API_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

async function getIssues() {
  try {
    const response = await gitlab.get(`/projects/${PROJECT_ID}/issues`);
    return response.data;
  } catch (error) {
    console.error('Error fetching issues:', error);
    throw error;
  }
}

async function createWebhook(callbackUrl) {
  try {
    const response = await gitlab.post(`/projects/${PROJECT_ID}/hooks`, {
      url: callbackUrl,
      issues_events: true,
      token: process.env.WEBHOOK_SECRET,
      enable_ssl_verification: true
    });
    return response.data;
  } catch (error) {
    console.error('Error creating webhook:', error);
    throw error;
  }
}

module.exports = { getIssues, createWebhook };