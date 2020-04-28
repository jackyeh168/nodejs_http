FROM node:14-alpine3.10

ADD . /data/
WORKDIR /data
RUN npm install

CMD [ "npm", "start" ]
