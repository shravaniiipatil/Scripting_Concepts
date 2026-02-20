class Student{
constructor(id,name){
this.id=id;
this.name=name;
}
display()
{
console.log("Student ID:"+this.id);
console.log("student Name:"+this.name);
}
}
let s1=new Student(101,"amit");
let s2=new Student(102,"neha");
s1.display();
s2.display();
