// fibonacci series
var num=5;
var a=0,b=1,c;
console.log("fibonacci series:\n"+a+"\n"+b);
for(let i=0;i<num-2;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}