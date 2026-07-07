let favourite = "Avatar";
let guess = prompt("Guess my favourite Movie");
while(favourite != guess)
{
    if(guess == quit)
    {
        console.log("u quit");
        break;
    }

    console.log("wrong");
    guess = prompt("wrong guess please  try again");
   // guess = prompt("guess my fav ");

   if(guess == favourite)
   {
    console.log("congrats !!");
   }
}