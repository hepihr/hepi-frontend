FROM node:alpine as base

WORKDIR /app

COPY package*.json ./

RUN yarn install serve

COPY . .

RUN yarn start