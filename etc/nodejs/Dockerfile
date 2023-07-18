FROM node:16-alpine

#Label
LABEL Maintainer="Davi Ferreira <dribeiroferr.ito@gmail.com>" \
      Description="QrMoster - API that generates custom AI qrCode with Node 16 based on Alpine Linux"

#Set the working directory inside the container
WORKDIR /app

# Copy the .env file containing .env vars
COPY ../../.dev.env.sh /app/.dev.env.sh

#Copy source code into new workdir
COPY ../../../src /app/src

#Copy package.json, tsconfig.json and jest.config.ts files into /app
COPY ../../tsconfig.json /app/tsconfig.json
COPY ../../package.json /app/package.json
COPY ../../jest.config.ts /app/jest.config.ts

#Install yarn 
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

#Set the environment variables by sourcing the .env file
RUN source /app/.dev.env.sh

#Install dependencies
RUN yarn install

#Runs build and starts application
RUN yarn build:deploy
RUN yarn start