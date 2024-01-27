//the url module splits up a web address into readable parts.
//like with the http module, we need to use the require() method again

var url = require('url');
var adr ='http://localhost:8080/default.htm?year=2017&month=february'; //this address will be parsed and return each part as properties
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search); //these show the address split into seperate components

var qdata = q.query; //this returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //this will return just the month


//now we can combine what we learned with the http object

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text.html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); //Now the page changes between the sample html files based on what is entered after the port in the url