var str="Jello world";
str[0]='h';
console.log(str);
str="Hello world";
console.log(str);

const ar=[1,2,3,4,5];
ar[0]=5;
ar[4]=1;
console.log(JSON.stringify(ar))
//arrow functions

// anonymous function
var per=function(){
    return "anonymous";
}
console.log(per())

// arrow function
const arr=()=>{
    return "arrow";
}
console.log(arr())
const arr1=()=> "arrow";
console.log(arr1())

const realNumber=[4,5.6,-9.8,3.14,42,6,8.34,-2]
const squareList = (arr)=>{
    const squaredIntegers = arr.filter(num => Number.isInteger(num)&&num>0).map(x => x*x);
    return squaredIntegers;
}

const squaredIntegers=squareList(realNumber);
console.log(squaredIntegers);
