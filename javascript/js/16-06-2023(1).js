const obj={
    x:20,
    y:30,
    z:60
}
console.log(obj.x+" "+obj.y+" "+obj.z)
// var x=obj.x;
var y=obj.y;
var z=obj.z;
console.log(obj.x+" "+y+" "+z);
// destructors
const {x:x, y:b, z:c}=obj;
console.log(x+" "+b+" "+c);
// another example
const avgtemp={
    today:20,
    tomorrow:80
}
function getTmrwTemp(avg){
    const {tomorrow:TmrwTemp}=avg;
    return TmrwTemp;
}
console.log("Tomorrow temperature: "+getTmrwTemp(avgtemp));

// nested destructors

const avg_temp={
    today:{min:20,max:40},
    tomorrow:{min:50,max:80}
}
function getTmrwMax(avg){
    var {tomorrow:{max:temp}}=avg;
    return temp;
}
console.log("Tomorrow maximum: "+getTmrwMax(avg_temp));
