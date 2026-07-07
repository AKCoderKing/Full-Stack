let input = document.querySelector("input");
// input.addEventListener("keydown",function(event)
// {
//     console.log(event);
//     console.log("key was pressed");
// });

// input.addEventListener("keyup",function()
// {
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was released");
// });

// character move game type 

input.addEventListener("keydown",function(event)
{
    console.log("code = ",event.code); // Arrowup, ArrowDown , arrowLeft, ArrowRight
    if(event.code == "ArrowUp") {
        console.log("character moves forward");
    }
    else if(event.code == "ArrowDown") {
        console.log("character moves backward");
    }
    else if(event.code == "ArrowLeft"){
        console.log("character moves left");
    }
    else if(event.code == "ArrowRight"){
        console.log("character moves right");
    }

});