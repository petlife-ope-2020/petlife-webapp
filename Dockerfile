FROM node:15.10-alpine

RUN npm install -g @angular/cli

WORKDIR /usr/src/app/client
COPY client/package.json ./
COPY client/package-lock.json ./
RUN npm install

WORKDIR /usr/src/app/server
COPY server/package.json ./
COPY server/package-lock.json ./
RUN npm install --production

WORKDIR /usr/src/app
COPY server ./server
COPY client ./client
RUN cd client && npm run build && \
    cd .. && rm -rf client && cd server

EXPOSE 8080
USER node
CMD ["npm start"]
