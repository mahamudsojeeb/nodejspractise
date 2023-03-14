let fs = require('fs');

//fs.mkdirSync('nodeFiles');
//fs.rmdirSync('nodeFiles');
fs.mkdir('hello',function(err,data){
    fs.readFile('readMe.txt','utf8',function(err,data){
        fs.writeFileSync('./hello/newWrite.txt',data)
    })

})