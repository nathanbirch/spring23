const express = require('express');
const app = express();

const port = 8081;

app.get('/testasdfasdfads', function (req, res) {
  res.send('Hello World');
});

app.get('/hello', function (req, res) {
  res.send('Hello class');
});

var server = app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
