var n=5,i,j;
var string='';
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        string+=String.fromCharCode(j+65)+' ';
    }
    string+='\n';
}
console.log(string);
string='';
console.log('hollow square');
for(i=0;i<n;i++){
    for(j=0;j<n;j++)
        if(i==0||j==0||i==n-1||j==n-1)
        string+='*';
        else
        string+=' ';
    string+='\n';
}
console.log(string);
console.log("Left star triangle");
string='';
for(i=0;i<n;i++){
    for(j=0;j<=i;j++)
    string+='* ';
    string+='\n';
}
console.log(string);
console.log("Right star triangle");
string='';
for(i=0;i<n;i++){
    for(j=n-1;j>i;j--)
    string+='  ';
    for(k=0;k<=i;k++)
    string+='* ';
    string+='\n';
}
console.log(string);
string='';
console.log("Reverse left star");
for(i=0;i<n;i++){
    for(j=n-1;j>=i;j--)
        string+="* ";
    string+='\n';
}
console.log(string);
string='';
console.log('pattern start with two stars');
for(i=0;i<n;i++){
    for(j=2;j<i;j++){
        string+='*';
    }
    string+='\n';
}
console.log(string);
