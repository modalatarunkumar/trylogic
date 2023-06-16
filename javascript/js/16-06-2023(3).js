// literal ` `
const person={
    name:'kumar',
    age:21
}
const greet=`Hello, My name is ${person.name}!
I am ${person.age} years old.`;
console.log(greet);
// returning object
function ob1(name,age,gender){
    return {
        name:name,
        age:age,
        gender:gender
    };
};
console.log(typeof(ob1("kumar",20,"male")));
var ob2=(name,age,gender)=>({name:name,age:age,gender:gender});
console.log(ob2("kumar",20,"male"));
