const express = require('express'),
    path = require('path'),
    port = process.env.PORT || 8080,
    server = express();


server.use(express.static(path.join(__dirname, '/public')));
server.use('/*', express.static(path.join(__dirname, '/public', 'index.html')));

server.listen(port, () => {
    console.log(`Server listening at ${port}`)
});
