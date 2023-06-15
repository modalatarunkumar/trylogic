// objects
var obj={
    x:20,
    y:30,
    myfun: function(){
        console.log(this.x+" "+this.y);
    }
}
obj.myfun();

// 
function fun(x=10,y=20){
    return parseInt(x)+parseInt(y);
}
console.log(fun(process.argv[2],process.argv[3]))
// armstrong
for(i=0;i<154;i++){
    var num=i;
    var sum=0;
    var len=0;
    for(;num>0;){len++;num=Math.floor(num/10);}
    var num=i;
    while(num>0){
rem=num%10;
sum+=Math.pow(rem,len);
num=Math.floor(num/10);
}
console.log((sum==i)?`${i} armstrong`:i+" not armstrong");
}