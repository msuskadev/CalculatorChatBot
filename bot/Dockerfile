FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app

COPY /gateway /src/app/gateway
COPY server.ts /src/app
COPY package.json /src/app
COPY tsconfig.json /src/app

RUN npm install
RUN npm install typescript -g
RUN npm run build

EXPOSE 3800

CMD ["node", "/src/app/dist/server.js"]
