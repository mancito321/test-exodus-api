FROM node:20

ENV NODE_VERSION 22.9.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN npm install

ENV PORT=3000
EXPOSE 3000

CMD ["npx","ts-node","src/index.ts"]