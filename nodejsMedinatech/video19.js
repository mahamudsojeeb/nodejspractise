let http = require("http");
let fs = require('fs');

let server = http.createServer(function(req,res){
    
    if(req.url === '/home'){
        res.writeHead(200,{'Content-type' : 'text/html'});
        let myReadstream = fs.createReadStream(__dirname + '/index.html');
        myReadstream.pipe(res);
        }
    else{
        res.end("other pages");
        
    }
});
server.listen(3000,'localhost');