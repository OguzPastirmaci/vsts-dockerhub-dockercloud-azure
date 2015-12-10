var express = require('express');

var PORT = 8000;

var app = express();  
app.get('/', function (req, res) {  
  res.send('Hello from Docker app!!\n');
});

if(!module.parent){
app.listen(PORT);
}
console.log('Running on port ' + PORT);
module.exports.getApp = app;

// import appInsights = require("applicationinsights");
// appInsights.setup("d264e9e1-b04c-41cb-9b82-e442dd9f98a4").start();