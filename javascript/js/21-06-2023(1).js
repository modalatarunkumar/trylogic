var outer=(function(){
    var i=0;
    return function(){
        return ++i;
    }
    
})();
console.log(outer());
console.log(outer());
console.log(outer());
console.log(outer());
