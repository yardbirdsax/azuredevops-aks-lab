FROM node:12-alpine

ENV node_port=80

COPY app /app

WORKDIR /app

RUN npm install

ENTRYPOINT npm start