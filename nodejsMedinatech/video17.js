let http = require('http');
let fs = require('fs');





let server = http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-type': 'text/html'
    })
    let myReadstream = fs.createReadStream(__dirname + '/index.html');
    //let myWriteStream = fs.createWriteStream(__dirname + '/abc.txt');

    myReadstream.pipe(res);
})
console.log(server)
server.listen(3000,'localhost');
