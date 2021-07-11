require('dotenv').config();
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var User = require('./postPractice');
var router = require('./router')(app,User)

app.listen(port, function(){
    console.log("Express server has started on port " + port)
});
const dbAddress = "mongodb+srv://유저네임:비밀번호@cluster0.olhvb.mongodb.net";

mongoose.connect(dbAddress,{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});
