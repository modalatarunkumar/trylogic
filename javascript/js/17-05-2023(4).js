//reverse string
var a='read the book';
console.log(rev(a));
function rev(string){
    var newString='';
    for(let i=string.length-1;i>=0;i--){
        newString+=string[i];
    }
    return newString;
}