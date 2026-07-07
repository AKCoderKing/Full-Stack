let arr = [1,2,3,4,5];
arr.forEach(function (el)
{
    console.log(el);
});
// 2nd method
let print = function(el)
{
    console.log(el);
};

arr.forEach(print);

// for each on object 
arr.forEach( (el) =>
{
    console.log(el);
});


console.log("forEach for object");

let a = [
    {
        name: "aman",
        marks: 95,
    },
    {
        name: "ankit",
        marks: 99,
    },
    {
        name: "govind",
        marks: 99,
    },
];

a.forEach((student) =>
{
    console.log(student.marks);
});

// map funtion 

let gpa = a.map((el) =>
{
    return el.marks/10;
})
console.log(gpa);


// map function 

let num  = [1,2,3,4,5];
let double = num.map( (el) => {
    return el*2;
})
console.log(double);

//filter

let nums = [1,2,3,4,7,8,2,9,10,12,11];
let ans = nums.filter((el) =>
{
    return el%2==0;
});
console.log(ans);


// every

let b = [2,4,6,8];
console.log(b.every((el) => (el %2 == 0) ));


let c = [1,3,5,7];
console.log(c.every((el) => (el %2 == 0) ));

let d = [1,3,8,4,10];
console.log(d.every((el) => (el %2 == 0) ));

// some

let e = [2,4,6,8];
console.log(e.some((el) => (el %2 == 0) ));


let f = [1,3,5,7];
console.log(f.some((el) => (el %2 == 0) ));

let g = [1,3,8,4,10];
console.log(g.some((el) => (el %2 == 0) ));

// reduce method 

let h = [1,2,3,4];
let i = h.reduce((res,el) =>
{
   console.log(res);
    return res+ el;
});

console.log(i);

// find max by reduce 

let j = [1,2,5,6,34,2,5,56,22,4];
let k = j.reduce((max,el) => {
    if(max<el) return el;
    else return max;
});
console.log(k);

// practice qs 1
let l = [10,20,60,80,40,50];
let m = l.every((el) => el %10 == 0);

console.log(m);

// qs2
let n = [9,4,5,0,4,-6];
let o = n.reduce((min,el) =>
{
    if(min> el)  return el;
    else return min;
});

console.log(o);


// default parameter 

function sum(a,b = 3)
{
    return a+b;
}

console.log(sum(2));
console.log(sum(2,5));

// spread use 
let p = [1,2,36,433,3];
console.log(Math.min(...p));
console.log(... "apnacollege");


let q = [2,4,24,23,43,53];
let r = [ ...q , ...p];
console.log(r);

// spread with object literals 
let data = {
    email : "ironman@gmail.com",
    psaaword: "abcd",
};

let datacopy = {
    ...data,id : 123,
};

console.log(datacopy);

// array ko in terms of object spread karna 

let s = [1,2,3,45,6,6];
let obj1 = {...s};
console.log(obj1);

// stirngs  ko in terms of object spread karna 

let obj2 = {... "hello"};
console.log(obj2);

// Rest use 
function  add(...args)
{
    // arguments
    for(let i = 0;i<args.length;i++)
    {
        console.log("you gave us :", args[i]);
    }
}
console.log(add(1,2,3,4));


function loo()
{
    console.log(arguments);
    console.log(arguments.length);
    // here listen argumnet not a arrar it is a object 
}
loo(1,2,3,4);

function small(msg,...args) // msg is additional argument
{
    console.log(msg);
    return args.reduce((min,el) => {
        if(min>el)
        {
            return el;
        }
        else {
            return min;
        }
    });
}
console.log(small("hello",1,2,4,3,56,30));

// destructuring 
let names = ['tony', 'bruce','steve','peter'];
let [winner ,runnerup, ...others] = names; // here others work as rest which contains others element of array
console.log(winner,runnerup ,others);

// destructuring in objects
const student = {
    name : "karan",
    age: 14,
    class: 9,
    subjects: ["hindi","english","math","science"],
    username: "karan@123",
    password: "abcd",
};

// let username = student.username;
let {username : user,password: secret,city = "mumbai"} = student;// username is a key and user work as variable 
console.log(user, secret,city);


