var express = require('express'),
  app = express(),
  port = process.env.PORT || 9999,
bodyParser = require('body-parser');
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.get('/', function (req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port);


console.log('interval-gen RESTful API server started on: ' + port);