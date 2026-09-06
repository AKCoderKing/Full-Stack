class Person {
    constructor(name,age) {
        console.log("parent class constructor"); 
        this.name = name;
        this.age = age;
    }
    
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person{

    constructor(name,age,marks) {  
        console.log("student class constructor"); 
        super(name,age);  // parent class constructor is being called
        this.marks = marks;
    }
}

let stu1 = new Student ("adam",25,95);
console.log(stu1.marks);
console.log(stu1.name);
console.log(stu1.talk());


class Teacher extends Person{

    constructor(name,age,subject) {
        super(name,age);   // parent class constructor is being called
        this.subject = subject;
    }
}

let t1 = new Student ("even",32,"english");
console.log(t1.subject);
console.log(t1.name);
console.log(t1.talk());