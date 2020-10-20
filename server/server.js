const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      router = require('./routes/routes');

const app = express(),
      port = process.env.PORT || 8080;

app.use(router);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Petlife_Webapp listening at ${port}`)
});
