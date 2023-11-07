// import http module
var http = require('http');
http.createServer(function(req,res){
    res.write("Welcome, Rooney Mwathani to the field of NodeJs");
    res.end()
}).listen(8080);