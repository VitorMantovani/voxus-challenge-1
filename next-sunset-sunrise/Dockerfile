FROM node:18

WORKDIR /usr/src/api

COPY . .

RUN yarn 

RUN yarn build

EXPOSE 8888

CMD ["yarn", "start:dev"]
