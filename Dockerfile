FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
ARG TELEGRAM_KEY="5493678079:AAHU7jN15-m7iAoMe_E0yVcQyv_v3uxpLAY"

RUN npm install

COPY . .

EXPOSE 8888
CMD [ "node", "index.js" ]