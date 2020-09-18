# Install the app dependencies in a full Node docker image
FROM node:12-alpine as builder

  
WORKDIR "/app"

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80