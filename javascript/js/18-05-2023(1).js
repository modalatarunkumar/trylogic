//patterns
var i,j,k,n=5,str='';
//pattern starts with two stars
for(i=2;i<=n;i++){
    for(j=1;j<=i;j++)
    str+="* ";
    str+='\n';
}
console.log(str);
// reverse left triangle
str='';
console.log("Reverse left triangle");
for(i=1;i<=n;i++){
    for(j=n;j>=i;j--)
    str+="* ";
    str+='\n';
}
console.log(str);
str='';
console.log("reverse right triangle");
for(i=1;i<=n;i++){
    for(j=1;j<i;j++)
    str+='  ';
    for(k=n;k>=i;k--)
    str+='* ';
    str+='\n';
}
console.log(str);