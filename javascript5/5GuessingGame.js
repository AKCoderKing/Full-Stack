const max = prompt("enter the max number");

const random = Math.floor(Math.random()*max) +1;
console.log(random);

let guess = prompt("Guess the number");

while(true)
{
    if(guess == "quit")
    {
       console.log("user quitting");
       break; 
    }  

    if(guess == random)
    {
        console.log("you are right ! congrats!");
        break;
    }
    else if(guess < random)
    {
        guess = prompt("your guess number is smaller Guess the number again");

    }

    else 
    {
        guess = prompt("your guess number is greater Guess the number again");

    }

}

