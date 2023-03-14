//console.log("hey shjaib");

setTimeout(function(){
    console.log("after 3 seconds");
},3000);

time = 0;

var interval = setInterval(function(){
    time += 3
    console.log(`${time} seconds has passed `);
    if(time > 3){
        clearInterval(interval);
    }
},3000)
