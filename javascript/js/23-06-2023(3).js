const arr=[1,2,3,4,5,6]
// console.log(arr);
// var [a, ,c, ,b]=arr;
// console.log(a+" "+c+" "+b);


const obj={
    x:10,
    y:20,
    z:30
}
// var x=obj.x;
// var y=obj.y;
// var z=obj.z;
// console.log(x+" "+y+" "+z);
var {x:a,y:b,z:c}=obj;
console.log(a+" "+b+" "+c);
