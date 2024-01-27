// npm install --save-dev nodemon
// npm install -g nodemon         to install it globally
// run "nodemon [test]"             instead of "node test" in the terminal when ready to run
// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted        if getting an error about running scripts being disabled

//Manual restarting
    // Whilst nodemon is running, if you need to manually restart your application, instead of stopping and restart nodemon, 
    // you can type rs with a carriage return, and nodemon will restart your process.

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello world');
  }).listen(8080);

  //not really sure what other code to write, I confirmed in the terminal that it automatically restarts when changes are made.