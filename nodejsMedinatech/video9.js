let fs = require('fs');

let readMe = fs.readFileSync('readMe.txt', 'utf-8');
console.log(readMe);


let writeFile = fs.writeFileSync('writeMe.txt',readMe);


let readAsynFile = fs.readFile('writeMe.txt','utf-8',function(err,data){
    console.log(data);
}) 
console.log('test');


