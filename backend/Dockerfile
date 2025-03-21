FROM node

WORKDIR /app
## We copy package.json seperate to avoid installing it evey time our code changes 
## without changing package.json file
COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD [ "node", "server.js" ]