let http = require('http');
let fs = require('fs');


let myReadstream = fs.createReadStream(__dirname + '/writeMe.txt');
let myWriteStream = fs.createWriteStream()
console.log(__dirname + "/teMe.txt");
myReadstream.on('data',function(chunk){
    console.log("new chunk");
    myWriteStream.write(chunk);
})
