//pallindrome of number
var num=123454321;
var temp=num,rev=0,rem;
while(temp>0){
    rem=temp%10;
    rev=rev*10+rem;
    temp=Math.floor(temp/10);
}
if(num==rev)
console.log("pallindrome");
else
console.log("not a pallindrome");
