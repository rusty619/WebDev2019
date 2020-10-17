var http = require('http');
var fs = require('fs');



/* Serving JSON Data
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    //var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    var myObj = {
       name: 'Ryu',
       job: 'Ninju',
       age: 29
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Herro listening to port 3000'); 

*/


/*  serving an HTML page 
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('Herro listening to port 3000'); 

*/

/* Pipes

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
    myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('Herro listening to port 3000'); 

*/



/* Writeable Streams
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});

*/

/* Readable Streams
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});

*/

/*
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Folks');
});

server.listen(3000, '127.0.0.1');
console.log('Herro listening'); 

*/