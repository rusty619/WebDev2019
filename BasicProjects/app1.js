var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFileSync('writeMe.txt', data);
});
//console.log(readMe);

//fs.writeFileSync('writeME.txt', readMe);


