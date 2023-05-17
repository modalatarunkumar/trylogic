//pallindrome of string
var a='kayak';
console.log(pal(a))
function pal(string){
    var len=string.length;
    for(let i=0;i<len/2;i++){
        if(string[i]!=string[len-i-1]){
            return 'not a pallindrome';
        }
    }
    return 'is a pallindrome';
}