//this is the express server file
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var models = require('./server/models/schemas.js')
var db_connect = require('./server/config/mongoose.js')

app.use(bodyParser.json());//modified for req/res json from angular
app.use(express.static(path.join(__dirname, '/client/dist/client')));
// All Routes
// Root Request
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8816
var server = app.listen(8816, () => {
    console.log("Running on port 8816");
});