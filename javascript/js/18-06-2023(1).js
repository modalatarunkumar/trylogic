// sorting
let arr=['banana','apple','potato','orange','avacado'];
console.log(arr.sort());
let arrnum=[5,55,4,1,222,9,87,678,78];
console.log(JSON.stringify(arrnum.sort(function(a,b){return a-b;})));
console.log(JSON.stringify(arrnum.sort((a,b)=> b-a)));
