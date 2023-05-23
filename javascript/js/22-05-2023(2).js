//arrays
//first method
var i;
var cars=['skoda','toyota','suzuki','roles royals','range rover','maruthi',"tesla"]
for(i=0;i<cars.length;i++){
    console.log(cars[i]);
}
console.log("for of (for each) loop");
for(i of cars){
    console.log(i);
}
console.log("while loop");
i=0;
while(i<cars.length)
console.log(cars[i++]);
//second method
console.log("Array new key word");
var n=new Array();
n[0]='abc';
n[1]=12;
n[3]=22;
for(i of n)
console.log(i)
//third method
console.log("Array using new constructor");
var third=new Array(132,'kumare',150,'waste fellow','zero','loser');
for(i of third)
console.log(i);