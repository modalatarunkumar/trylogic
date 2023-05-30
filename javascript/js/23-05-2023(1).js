var a=[9,8,9,8,9,7,6,9,7,6,9,7,8,9,9]
var choice=9,count=0;
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++)
    if(a[i]==a[j]&&a[i]==choice){
        count++;i=j+1;break;
    }
    
}
//console.log(Math.floor(count));
console.log(count);
