# B3 Production

## Production Server with Real-Time Web

### Project Overview

This project implements a Node.js application that integrates with GitLab Webhooks. It listens for issue-related events and provides real-time updates to connected clients via WebSockets. The application also fetches and displays a list of issues from a GitLab repository.

### Features

- Fetches issues from a GitLab repository using the GitLab REST API.
- Real-time updates for issue events using WebSockets.
- Secure webhook validation using a secret token.
- Reverse proxy setup with Nginx for production.
- HTTPS support for secure communication.

### Prerequisites

- Node.js (v16 or later)
- GitLab account with a repository and API access token
- Nginx installed on the production server
- PM2 for process management

###

|             |                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------- |
| IP address  | 194.47.179.108                                                                                  |
| Domain name | cscloud9-108.lnu.se                                                                             |
| Username    | ubuntu                                                                                          |
| Open ports  | 22, 80, 443                                                                                     |
| Guide       | [Connect to a server](https://coursepress.lnu.se/manual/cscloud/education/03-connect-to-server) |

### Step 1 - Connect to the server using SSH (over VPN)

```bash
# Login using ssh key file
ssh ubuntu@{HOST} -i the-ssh-key
ssh ubuntu@194.47.179.108 -i xz222bb-key-pair.pem
ssh ubuntu@cscloud9-108.lnu.se -i xz222bb-key-pair.pem
```

### Step 2 - Update, Upgrade and Install Node, NPM and Git

```bash
# Update and upgrade system
sudo apt update
sudo apt-get update
sudo apt upgrade -y
# Install Node
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
# Install Git
sudo apt-get install git
```

### Step 3 - Install and Configure NGINX

```bash
# Install Nginx
sudo apt-get install nginx
# Check status and reload after changes in configuration
systemctl status nginx
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl reload nginx
sudo systemctl restart nginx
sudo service nginx reload
sudo service ngins restart
nslookup 194.47.179.108

# Access the web server using curl
curl http://localhost

# Location of nginx configuration files
/etc/nginx/nginx.conf # Location of global config file
/etc/nginx/sites-enabled/default # Location of default server block config file.

sudo nano /etc/nginx/conf.d/cscloud9-108.lnu.se.conf
```

```code
server {
   listen 80;
   listen [::]:80;

   server_name cscloud9-108.lnu.se;
   index index.html;

   root /var/www/html;

   location / {
            try_files $uri $uri/ =404;
   }

   location /crud {
      proxy_pass http://localhost:5050/;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header X-Forwarded-Host $host;
      proxy_set_header X-Forwarded-Port $server_port;
   }
}
```

```bash
sudo nano /var/www/crud/app.mjs
```

```code
import http from 'http'
const PORT = 5050;

http.createServer((req, res) => {
   res.writeHead(200);
   res.end('Hello World\n')
}).listen(PORT)
```

### Step 4 - Add TLS (HTTPS)

```bash
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
sudo certbot renew --dry-run

```

### Step 5 - Enable HTTP2

### Step 6 - Process Manager, PM2

```bash
sudo npm i pm2 -g

// Run "npm start" with port set to 5001
PORT=5001 pm2 start npm --name express-app:5001 -- start
PORT=5002 pm2 start app.js
pm2 start api.js -i 4
pm2 list
pm2 logs
pm2 monit
pm2 startup
https://pm2.io/
```

### Step 7 - Getting the code to the server

```bash
ssh -T git@gitlab.lnu.se
scp -r \* ubuntu@cscloud9-108.lnu.se:/var/www/snippet-app/
```

### Step 8 - Executing docker containers at the server (OPTIONAL)

```bash
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

sudo usermod -aG docker ubuntu
sudo systemctl restart docker
docker run -d -p 27017:27017 --name mongodb mongo:4.4.3
```

### Step 9 - Troubleshooting

```bash
systemclt reload nginx
systemctl restart nginx
pm2 logs --lines 100
docker ps
pm2 restart {ID}

```

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>

```

2. Install PM2

```bash
npm install pm2
```

3. Start your application in production mode

```bash
pm2 start src/app.js --name gitlab-webhook-app --env production

```

4. Save PM2 process list

```bash
pm2 save

```

5. Generate startup script (for server reboots)

```bash
pm2 startup
```
