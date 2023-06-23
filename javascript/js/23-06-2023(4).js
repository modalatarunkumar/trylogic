// spread

var arr=[1,2,3,4,5,6,7,8,9,10];
// var arr1=arr;
// arr[0]=20;
// arr1[1]=50;
// console.log(JSON.stringify(arr));
// console.log(JSON.stringify(arr1));
var arr1=[...arr];
arr[0]=20;
arr1[1]=50;
console.log(JSON.stringify(arr));
console.log(JSON.stringify(arr1));

var [ , , ...newarr]=arr;
console.log(JSON.stringify(newarr));

