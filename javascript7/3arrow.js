const sum = (a,b) => {
    console.log(a+b);
}
console.log(sum(23,45));

let cube = (n) => {
    console.log(n*n*n);
}

console.log(cube(4));

const mul = (a,b) => a*b;
console.log(mul(4,10));


// setTimeout( () => {
//     console.log("Apna college");
// }, 4000);

// console.log("welcome to");

let id = setInterval(() => {
    console.log("hello world");
},3000);

console.log(id);

let id2 = setInterval(() =>
{
    console.log("apna college");
},2000);

console.log(id2);