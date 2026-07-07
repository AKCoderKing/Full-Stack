// let student1 = "aman";
// let student2 = "shradha";
// let student3 = "rajat";

let students = ["aman","shradha","rajat"];
let nums = [2,3,4,5,6];
let info = ["aman","bob","25","6.1"]; // mixed aaray
let empty = [];   // empty array

let cars = ["audi","bmw","maruti","xuv"];
cars.push("toyota");
cars.push("mercedes");
cars.pop();
cars.unshift("tvs");
cars.unshift("hero");
cars.shift();
console.log(cars.indexOf("tvs"));
console.log(cars.indexOf("honda"));
console.log(cars.includes("bmw"));
console.log(cars.includes("yamaha"));

let primary =["red",'yellow','blue'];
let secondary = ["orange",'green','violet'];

console.log(primary.concat(secondary));
console.log(secondary.concat(primary));

console.log(cars.reverse());