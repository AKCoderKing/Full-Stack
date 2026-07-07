function poem()
{
    console.log("twinkele twinkele ew fwe");
    console.log("whati wonder ");
}

poem();

function rollDice()
{
    let rand = Math.floor(Math.random()*6)  + 1;
    console.log(rand);
}

rollDice();

function printInfo(name, age)
{
    console.log(`${name} 's age is ${age},`);

}

printInfo("ankit", 21);

//printInfo("ak");// age undefined

// avg of 3 numbers

function calcAvg(a,b,c)
{
    let ans = (a+b+c)/3;
    console.log(ans);
}


calcAvg(2,4,6);


function printTable(n)
{
    for(let i =n ;i<=n*10;i+=n)
    {
        console.log(i);
    }
}


printTable(2);


function isAdult(age)
{
    if(age >= 18)
    {
        return "adult";
    }
    else {                                                                                                                                                                                                    
        return "not adult";
    }
    console.log("bye bye");
}

function getSum(n)
{
    let sum = 0;
    for(let i = 1; i<= n; i++)
    {
        sum += i;
    }
    return sum;
}

console.log("/");

console.log(getSum(10));

// concatenation

let str = ["hi","hello","bye","!"];
function concat(str)
{
    let result = "";
    for(let i = 0;i<str.length;i++)
    {
        result += str[i];
    }

    return result;
}

console.log(concat(str));

// lexical scope 

function outerFunc()
{
    let x = 10;
    let y = 6;
    function innerFunc()
    {
        let a = 12;
        console.log(x);
        console.log(y);

    }
    //  console.log(a)  that can not be used outer function
    innerFunc(); 
}

// function expression 

let z = function(a,b)

{
    return a+b;
}
console.log(z(1,50));

// higher order function

function multipleGreet(func,n)
{
    for(let i = 1;i<=n;i++)
    {
        func();
    }
}

let greet = function()
{
    console.log("hello");
}

 console.log(multipleGreet(greet,2));


 // higher order function that returns function

 function oddOrEvenFactory(request)
 {
    if(request == "odd")
    {
        let odd = function(n){
            console.log(!(n%2 ==0));
        }
        return odd;
    }

    else if(request == "even")
    {
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }

    else 
    {
        console.log("wrong request");
    }
 }

 let request = "odd";