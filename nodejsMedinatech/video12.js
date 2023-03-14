let http = require("http");

let server = http.createServer(function(req,res){
    res.writeHead(200,
        {'Content-type' : 'text/plain'});
    res.end("hey ajib");
});
server.listen(3000,'localhost');

