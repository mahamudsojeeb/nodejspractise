
let http = require('http');
let fs = require('fs');





let server = http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-type': 'text/plain'
    })
    let myReadstream = fs.createReadStream(__dirname + '/writeMe.txt');
    let myWriteStream = fs.createWriteStream(__dirname + '/abc.txt');

    myReadstream.pipe(res);
})

server.listen(3000,'localhost');