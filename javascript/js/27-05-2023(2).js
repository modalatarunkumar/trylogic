//functions
//named function
function addNum(a,b){
    return a+b;
}
console.log(addNum(5,5));
console.log(addNum(4,3));
//anonmous function
// stored in a variable
var add=function(a,b){return a+b;}
console.log(add(45,54));
console.log(add(101,102));
//passed as an argument to another function
setTimeout(function()
{
    console.log("this message is displayed after 5 seconds");
},5000);
//constructors
var addFunc=new Function("a","b","console.log('in constructors function');return a+b;");
console.log(addFunc(1,1));
//self invoking function
(function(){
    console.log("in one self invoking function");
})();
(function(){
    console.log("in another self invoking function");
}());
