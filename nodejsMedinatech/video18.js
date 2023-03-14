let http = require('http');
let fs = require('fs');





let server = http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-type': 'application/json'
    })
    let myObj = {
        name: "shajib",
        roll: "123"
    }
    res.end(JSON.stringify(myObj));
})

server.listen(3000,'localhost');