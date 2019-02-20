var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var port= 3600;
var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static('website'));

app.get('/itemsjson', function(request, response){
    var data = fs.readFileSync('products.json');
    var words = JSON.parse(data);   
    
    return response.json(words);
}
)
app.post('http://localhost:/3600/addItem', reply)

reply(response,request){
    
    //var data = fs.writeFileSync('products.json', itemObj);
    //if(error) {
     //   return {su}
   // }
reply = {
    msg : "gsdfgf"
}
   response.send(reply)
   
}



// app.get('http://localhost:5555/products', function(req, res) {
//     console.log("GET From SERVER");
//     res.send(products);
// });

// app.post('http://localhost:5555/products', function(req, res) {
//     var product = req.body;
//     console.log(req.body);
//     products.push(product);
//     res.status(200).send("Successfully posted product");
// });