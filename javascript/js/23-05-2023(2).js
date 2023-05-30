var str='stringstrs';
var copy='';
var count=0;
function rep(choice,str,ini){
    count=0;
    for(let i=ini;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]==str[j]&&str[i]==choice){
                count++;i=j+1;break;
            }
        }
    }
    return count;
}
for(i=0;i<str.length;i++){
    var res=rep(str[i],str,i);
    if(res!=0)
    copy+=str[i];
}
console.log(copy);