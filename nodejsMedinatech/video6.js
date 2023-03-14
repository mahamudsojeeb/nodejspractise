let hello = function(name,arr){
    console.log("hello "+name+" you have "+arr.length+" parts in your name");
}

let adder = function(a,b){
    return a+b;

}
let pi = 3.14

// module.exports=hello


module.exports = {
    hello : hello,
    adder : adder,
    PI : pi
}



