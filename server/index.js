const express = require('express'),
    path = require('path'),
    router = require('./routes');

const server = express(),
    port = process.env.PORT || 4200;

server.use(express.json());
server.use(router);
server.use(express.static(path.join(__dirname, '/public')));

server.get('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`)
});
