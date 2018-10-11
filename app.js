//app.js

var express = require('express');
var bodyParser = require('body-parser');

const product = require('./routes/product.route');
var app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://vaibnak:justformongodb7@ds125693.mlab.com:25693/product';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);
var port = 1234;

app.listen(port, ()=> {
  console.log("server is running on port number " + port);
});
