FROM node:18

WORKDIR /server

COPY ./package.json ./

ENV NODE_ENV=PRODUCTION

RUN npm i

COPY ./ ./

RUN npm run build

CMD ["node", "dist/main.js"]