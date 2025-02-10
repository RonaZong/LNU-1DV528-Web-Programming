FROM node:18

# Act as local user, not root, with workdir homedir
#RUN groupadd -r dbw && useradd --no-log-init -r -g dbw dbw
#WORKDIR /home/dbw
#USER dbw

# Bundle app source
COPY . .

# Install node_module
RUN npm install

# Act as ordinary user
USER node

# Start the server
CMD ["npm", "start"]
