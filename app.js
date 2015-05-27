var express = require('express');
var app = express();

app.get('/', function(request, response){
  //__dirname #=> current directory
  response.sendFile(__dirname + '/index.html');
});

app.listen(8080);

console.log("Listening on port 8080. . .");
