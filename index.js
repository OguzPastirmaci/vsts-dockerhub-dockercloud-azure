var express = require('express');

var PORT = 8000;

var app = express();  

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {  
  // res.send('Hello from Docker app!!\n');
      res.render('home', {
  });
});

if(!module.parent){
app.listen(PORT);
}
console.log('Running on port ' + PORT);
module.exports.getApp = app;