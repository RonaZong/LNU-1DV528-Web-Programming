# Server setup script

#!/bin/bash

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install project dependencies
npm install --production

# Configure Nginx (assuming you have a config file prepared)
sudo cp setup/nginx.conf /etc/nginx/sites-available/your-domain
sudo ln -s /etc/nginx/sites-available/your-domain /etc/nginx/sites-enabled/

# Install SSL certificate (using Let's Encrypt)
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com

# Start application
pm2 start src/app.js --name gitlab-webhook-app --env production
pm2 save
pm2 startup