FROM node:latest

WORKDIR /app

COPY package.json ./
COPY . /app

RUN npm install

EXPOSE 8888

CMD [ "node", "app.js" ]
