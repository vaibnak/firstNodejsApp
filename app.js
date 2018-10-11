//app.js

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 1234;

app.listen(port, ()=> {
  console.log("server is running on port number " + port);
});
