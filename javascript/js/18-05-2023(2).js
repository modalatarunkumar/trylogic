//pattern
console.log("Pyramid pattern");
var i,j,k,n=5,str='';
for(i=1;i<=n;i++){
    for(j=i;j<=n;j++)
    str+='   ';
    for(k=1;k<=i*2-1;k++)
    str+=" * ";
    str+='\n';
}
console.log(str);
str='';
//rhombus diamond
console.log("diamond pattern");
for(i=1;i<=n;i++){
    for(j=i;j<=n;j++)
    str+='   ';
    for(k=1;k<=i*2-1;k++)
    str+=" * ";
    str+='\n';
}
for(i=n-1;i>=1;i--){
    for(j=i;j<=n;j++)
    str+='   ';
    for(k=1;k<=i*2-1;k++)
    str+=" * ";
    str+='\n';
}
console.log(str);
str='';
console.log('hollow triangle');
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        if(j==1||j==i||i==n){
            str+='*';
        }
        else{
            str+=' ';
        }
    }
    str+='\n';
}
console.log(str);