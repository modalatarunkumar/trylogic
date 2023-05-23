//first method
emp={
    number:12345,
    name:"Kumar",
    salary:1500
}
console.log(emp.salary+"\n"+emp.number+"\n"+emp.name)
for(var i in emp){
    console.log(emp[i]);
}
//second method
var student=new Object();
student.name='suresh';
student.number=123456;
student.salary=150000;
for(var i in student){
    console.log(student[i]);
}
//third method
function fun(name,roll,section,mobile){
    this.name=name;
    this.roll=roll;
    this.section=section;
    this.mobile=mobile;
}
var k=new fun('naveen',123,'web',1234567890);
for(var i in k){
    console.log(k[i]);
}