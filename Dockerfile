FROM node:12

  
WORKDIR "/app"

# Install OS updates 
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

ENV NODE_ENV production
ENV PORT 3000

USER node

EXPOSE 3000

CMD ["npm", "start"]