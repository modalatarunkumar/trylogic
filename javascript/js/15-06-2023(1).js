var obj={
    x:10,
    y:20,
    z:30,
}
var x=obj.x;
var y=obj.y;
var z=obj.z;

console.log(JSON.stringify(obj)+"\n"+x+" "+y+" "+z)
//destructor
const {x:a, y:b, z:c}=obj;
console.log(a+" "+b+" "+c);
//swapping two numbers using destructor
var x=20;
var y=30;
console.log("before swapping:"+x+" "+y);
[y,x]=[x,y]
console.log("after swapping:"+x+" "+y);
//array destructor
const [aa,bb, , , cc]=[1,2,3,4,5,6]
console.log(aa+" "+bb+" "+cc)

//remove first two elements in array using destructor

function removeFirstTwo(arr){
    const [ , , ...list]=arr;
    return list;
}
console.log(JSON.stringify(removeFirstTwo([1,2,3,4,5,6,7,8,9,10])))
var arr1=[1,2,3,4,5,6];
var arr2=arr1;
arr2[1]=22;
arr1[0]=55;
console.log(JSON.stringify(arr1)+"\n"+JSON.stringify(arr2));
// spread operator
var arr1=[1,2,3,4,5,6];
var arr2=[...arr1];
arr2[1]=22;
arr1[0]=55;
console.log(JSON.stringify(arr1)+"\n"+JSON.stringify(arr2));
