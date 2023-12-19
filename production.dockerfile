FROM node:18-alpine
EXPOSE 3003

WORKDIR /home/app

COPY . .

RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
