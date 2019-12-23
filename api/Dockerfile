FROM node:12

WORKDIR /home/node/app

COPY ./src/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

CMD [ "npm", "start" ]
