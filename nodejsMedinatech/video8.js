let coreModuleEvent = require("events");
let utlis = require("util");


var person = function(name){
    this.name = name;

}

// function nameFunction(name){
//     console.log(name);
// }
// console.log(typeof(person.name));


// var myEmitter = new coreModuleEvent.EventEmitter();
// myEmitter.on('someEvent',function(value){
//     console.log(value);
// })
// myEmitter.emit('someEvent',"hello world")


utlis.inherits(person,coreModuleEvent.EventEmitter);

let mahamud = new person("mahamud");
let hasan = new person("hasan");
let sajib = new person("sajib");
let names = [mahamud,hasan,sajib];
names.forEach(function(name){
    name.on('sayName',function(name){
        console.log(name);
    });
});
mahamud.emit('sayName',mahamud);
console.log("hello");




 



