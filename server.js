var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./exam/routes/routes.js');


app.use("/client", express.static(path.join(__dirname, "exam/client")));
app.use("/templates", express.static(path.join(__dirname, "exam/client/templates")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app);
mongoose.connect('mongodb://localhost/exam');
app.listen(8080); //listen to Port8080
console.log('Final Server is running');
