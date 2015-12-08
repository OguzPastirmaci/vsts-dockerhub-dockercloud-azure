var express = require('express');

var PORT = 8000;

var app = express();  
app.get('/', function (req, res) {  
  res.send('Hello from Docker app\n');
});

if(!module.parent){
app.listen(PORT);
}
console.log('Running on port ' + PORT);
module.exports.getApp = app;