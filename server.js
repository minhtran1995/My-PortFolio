process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//var express = require('express');
var express= require('./config/express')

var app = express();

/*
app.route('/').get(function(req,res){
    res.send("This is Get Request");
}).post(function(req,res){
    res.send("This is Post Request");
});*/

/*
var hasName = function(req,res,next){
  if(req.param("name"))
  {
      next();
  }  
  else{
      res.send("name pls ?");
  }
};

var sayHello = function(req,res,next){
    res.send(req.param('name')+ " says Hello");
};

app.get("/",hasName,sayHello);
*/


app.listen(3000);

module.exports = app;
console.log('Server Running at localhost:3000/');