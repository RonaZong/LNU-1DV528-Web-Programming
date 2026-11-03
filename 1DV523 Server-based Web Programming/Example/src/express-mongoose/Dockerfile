############################################################
# Dockerfile to build a node.js development
# Based on Ubuntu
############################################################

# Set the base image to Ubuntu
FROM node

# File Author / Maintainer
LABEL "com.example.vendor"="LNU"
LABEL version="1.0"

# Since it is just dev we create this with std user
RUN mkdir -p /opt/app

# Start with a WORKDIR
WORKDIR /opt/app

# First take the package.json and install all the modules
COPY package.json .
RUN npm install --quiet

# Install mongosh
RUN wget https://downloads.mongodb.com/compass/mongosh_0.5.2_amd64.deb
RUN dpkg --install mongosh_0.5.2_amd64.deb

# Copy the app
COPY . .

# expose port 8008
EXPOSE 8008

# Start the application when starting the container
CMD npx nodemon --inspect=0.0.0.0:5858 -L --watch . app.js
