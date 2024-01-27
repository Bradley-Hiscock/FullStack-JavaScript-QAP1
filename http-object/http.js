//The Http module is able to create a http server that listens to server ports and gives a response back to the client.

var http = require('http') // the "require" method is needed to include  the http module

// http.createServer(function (req, res) { //this creates the server, which accepts a request and a response
//     res.writeHead(200, {'Content-Type': 'text/html'}); //this displays the content as HTML **200 is status code "OK"
//     res.write(req.url); //Rather than returning a string, this argument returns whatever is typed in the url after the port number
//     res.end(); //this ends the response
// }).listen(8080); //the server object listens on port 8080


//** Splitting Query Strings **
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month; //instead of just returning whatever was typed after the url, this makes it more readable
    res.end(txt);
  }).listen(8080);