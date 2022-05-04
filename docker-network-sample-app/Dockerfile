FROM node

WORKDIR /usr/src/node-app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

CMD ["npm", "start"]