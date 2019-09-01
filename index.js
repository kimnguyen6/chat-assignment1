var express = require('express');
var app = express();
const cors = require('cors');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, './assess/dist/assess')));
app.use(bodyParser.json());
app.use(cors());

let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: " + host + " port: " + port);
});