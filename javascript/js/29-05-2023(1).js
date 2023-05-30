var k=3;
//named function
function cube1(num){
    return num*num*num;
}
console.log("named function " +cube1(k));
//anonymous function
var cube2=function(num){
    return num*num*num;
}
console.log("Anonymous Function "+cube2(k));
//constructor function
var cube3=Function("num","console.log('Constructor function ');return num*num*num;");
console.log(cube3(k));
//self invoking function
(function(num){
    console.log("self invoking first: "+num*num*num);
})(k);
(function(num){
    console.log("self invoking second: "+num*num*num);
}(k));

