# Production Server with Real-Time Web

## Project Overview
This project implements a Node.js application that integrates with GitLab Webhooks. It listens for issue-related events and provides real-time updates to connected clients via WebSockets. The application also fetches and displays a list of issues from a GitLab repository.

## Features
- Fetches issues from a GitLab repository using the GitLab REST API.
- Real-time updates for issue events using WebSockets.
- Secure webhook validation using a secret token.
- Reverse proxy setup with Nginx for production.
- HTTPS support for secure communication.

## Prerequisites
- Node.js (v16 or later)
- GitLab account with a repository and API access token
- Nginx installed on the production server
- PM2 for process management

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>