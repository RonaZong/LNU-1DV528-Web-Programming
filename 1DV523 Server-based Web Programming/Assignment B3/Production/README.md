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

2. Install PM2
   ```bash
   npm install pm2
   ```

3. Start your application in production mode
   ```bash
   pm2 start src/app.js --name gitlab-webhook-app --env production

4. Save PM2 process list
   ```bash
   pm2 save

5. Generate startup script (for server reboots)
   ```bash
   pm2 startup


## 
|   |   |
|---|---|
| IP address | 194.47.179.108 |
| Domain name | cscloud9-108.lnu.se |
| Username | ubuntu |
| Open ports | 22, 80, 443 |
| Guide | [Connect to a server](https://coursepress.lnu.se/manual/cscloud/education/03-connect-to-server) |

## Connect to the server using SSH (over VPN)
   ````bash
   ssh ubuntu@{HOST} -i the-ssh-key
   ssh ubuntu@194.47.179.108 -i xz222bb-key-pair.pem

