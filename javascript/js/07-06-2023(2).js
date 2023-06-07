//
const increment = (function(){
    return function increment(number, value = 1){
        return number+value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

// rest operator in array

function sum(...args){
    return args.reduce((a, b) => a+b,0);
}
console.log(sum(1,2,3,4,5,6))

// spread operator
const arr1=['jan','feb','mar','apr']
var arr2;
arr2=arr1;
arr1[0]='second';
console.log(arr2);

var arr3;
arr3=[...arr1];
arr1[0]="third";
console.log(arr3);