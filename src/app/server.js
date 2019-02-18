var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('http://localhost:5555/products', function(req, res) {
    console.log("GET From SERVER");
    res.send(products);
});

app.post('http://localhost:5555/products', function(req, res) {
    var product = req.body;
    console.log(req.body);
    products.push(product);
    res.status(200).send("Successfully posted product");
});

app.listen(6069);