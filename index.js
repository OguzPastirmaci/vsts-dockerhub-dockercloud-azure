var express = require('express');
var os = require(“os”);

var PORT = 8000;

var app = express();

var localhostname = os.hostname();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
      res.render('index', {
      	localhostname: 'localhosthostname'
      })
  });
});

if(!module.parent){
app.listen(PORT);
}

console.log('Running on port ' + PORT);
module.exports.getApp = app;