#Avoid getting the latest node version
FROM node:20.9.0-bullseye-slim 
#Install the dumb-init as PID to send kill signal to node
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
#Set up a environment variable NODE_ENV=production
ENV NODE_ENV production
#Directories that the files will be default to /usr/src/app
WORKDIR /usr/src/app
#Copy all the project and assign the ownership of the copied files to node user
COPY --chown=node:node . . 
#Install required dependencies (no dev dependencies, only production)
RUN npm ci --only=production
#Run as user node.
USER node
#ENtrypoint to make sure signal is forwarded correctly
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
#Command to run the app
CMD [ "node", "./bin/www"]