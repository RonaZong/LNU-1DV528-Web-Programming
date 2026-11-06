# Server setup script

#!/bin/bash

# Update and upgrade system
sudo apt update
sudo apt-get update
sudo apt upgrade -y

# Install Node
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Git
sudo apt-get install git

# Install Nginx
sudo apt-get install nginx

# Install project dependencies
npm install --production

# Configure Nginx (assuming you have a config file prepared)
sudo cp setup/nginx.conf /etc/nginx/conf.d/cscloud9-108.lnu.se.conf
sudo ln -s /etc/nginx/conf.d/cscloud9-108.lnu.se.conf /etc/nginx/sites-enabled/

# Install SSL certificate (using Let's Encrypt)
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
sudo certbot renew --dry-run

# Install PM2
sudo npm install pm2 -g 

# Start application
PORT=5001 pm2 start npm --name B3-Production:5001 -- start
PORT=5002 pm2 start app.js
pm2 list
pm2 logs
pm2 monit
pm2 save
pm2 startup