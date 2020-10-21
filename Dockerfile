FROM node:12.19-alpine

RUN npm install -g @angular/cli

WORKDIR /usr/src/app/angular
COPY angular/package.json ./
COPY angular/package-lock.json ./
RUN npm install

WORKDIR /usr/src/app/server
COPY server/package.json ./
COPY server/package-lock.json ./
RUN npm install --production

WORKDIR /usr/src/app
COPY server ./server
COPY angular ./angular
RUN cd angular && npm run build && \
    cd .. && rm -rf angular

EXPOSE 8080
USER node
CMD ["node", "server/server.js", "--production"]
