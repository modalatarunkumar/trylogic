// array destructors
var [x,y]=[1,2,3,4,5,6]
console.log(x+" "+y);
var [x, ,y, ,z]=[1,2,3,4,5,6]
console.log(x+" "+y+" "+z)
// swap of two numbers using destructor
var a=20,b=10;
[b,a]=[a,b];
console.log(a+" "+b)
// destructor + rest operator
var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(JSON.stringify(removeFirstTwo(arr)));
function removeFirstTwo(list){
    const [ , , ...arr]=list;
    return arr;
}
// destructor as function argument
var stats={
    avg:60,
    min:5,
    max:50,
    std:6.5,
    corr:4,
    median:20,
    mode:13
}
function minmax1(obj){
    return (obj.min+obj.max);
}
function minmax2({min,max}){
    return (min+max);
}
console.log(minmax1(stats));
console.log(minmax2(stats));