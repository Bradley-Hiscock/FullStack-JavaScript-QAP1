// Common uses for the fs object are reading/creating/updating/deleting/renaming files

var fs = require('fs'); //again, the require() method is needed
var http = require('http');

//reading files
// http.createServer(function(req, res){
//     fs.readFile('test.html', function(err, data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

//creating files
fs.appendFile('newfile1.txt', 'Hello content', function (err){ //appendFile tries to add specified content to a file, if the file doesn't exist, it creates one
    if (err) throw err;
    console.log('Saved');
});

//creating a new, empty file
fs.open('newfile2.txt', 'w', function (err, file) { //the fs.open method takes a flag as the second argument, if the flag is "w" for writing, the specified file is opened for writing, if it doesn't exist, it creates one
  if (err) throw err;
  console.log('Saved');
});

//replacing files

fs.writeFile('newfile3.txt', 'Hello content', function (err){ //the fs.writeFile method replaces the specified file and content if it exists, if not, it creates one
    if (err) throw err;
    console.log('Saved');
});

//updating files

fs.appendFile('newfile1.txt', 'This is my text', function(err){ //fs.appendFile adds the specified content to the end of the specified file
    if (err) throw err;
    console.log("Updated");
});

//replacing files

fs.writeFile('newfile3.txt', 'This is my text', function(err){ //fs.writeFile replaces both the specified file and content
    if (err) throw err;
    console.log('Replaced');
});

//deleting files

fs.unlink('newfile2.txt', function (err){ //fs.unlink deletes the specified file
    if (err) throw err;
    console.log('File deleted');
});

//renaming files

fs.rename('newfile1.txt', 'renamedfile.txt', function(err){ //fs.rename renames specified file to the given name (renamedfile.txt)
    if (err) throw err;
    console.log('File Renamed');
});