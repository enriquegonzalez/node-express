var url = require('url');
var request = require('request');
var express = require('express');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app = express(); // create the express server

app.get('/', function(req, res){
  request(searchURL).pipe(res);
});

app.listen(8080);
console.log("Listening on port 8080. . .");
