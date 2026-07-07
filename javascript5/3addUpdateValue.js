const student = {
    name: "Shradha",
    age: 23,
    marks: 94,
    city: "delhi"
};

console.log(student.city);
student.city = "mumbai";
console.log(student.city);

// adding new key and element in student object literals

student.gender = "female";

console.log(student.gender);

student.marks = [92,332,32];
console.log(student.marks);

delete student.age;
console.log(student);


