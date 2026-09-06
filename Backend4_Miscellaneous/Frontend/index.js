let arr1 = [1,2,3];
let arr2 = [1,2,3];

arr1.sayHello = () => {
    console.log("helllo!, i am arr");
};


arr2.sayHello = () => {
    console.log("helllo!, i am arr");
};

//Factory Function

// function PersonMaker(name, age) {

//     const person ={
//         name: name,
//         age: age,
//         talk() {
//             console.log( `Hi,my name is ${this.name}`);
//         },
//     };                                                                     
//     return person;
// }

// Constructors

// function Person(name,age) {

//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, ,my name is ${this.name}`);
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, ,my name is ${this.name}`);
    }

}


let p1 = new Person("adam",25);
let p2 = new Person("eve",25);

