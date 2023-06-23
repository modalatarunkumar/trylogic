// normal function
function fun(){
    console.log("hellow");
}
fun();

// arrow function
const fun1=()=>{
    console.log('hello');
}
fun1();

function add1(a,b){
    return a+b;
}
console.log(add1(20,30))

const add2=(a,b)=>a+b;
console.log(add2(20,30))
function sqr1(a){
    return a*a;
}
console.log(sqr1(5))

const sqr2=a=>a*a;
console.log(sqr2(5))

var a=20;
var a=50;
let b=20;
b=50;
const c=50;
//c=50;
//const c=40;
