############################################################
# Dockerfile to build mongosh in a image
############################################################

# Set the base image
FROM node

# Since it is just dev we create this with std user
RUN mkdir -p /opt/app

# Start with a WORKDIR
WORKDIR /opt/app

# Install mongosh
RUN wget https://github.com/mongodb-js/mongosh/releases/download/v1.1.5/mongodb-mongosh_1.1.5_amd64.deb
RUN dpkg --install mongodb-mongosh_1.1.5_amd64.deb
