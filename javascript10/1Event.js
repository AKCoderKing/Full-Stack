// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
//     //alrt("button was clicked");
// };


let btns = document.querySelectorAll("button");
for(btn of btns)
{
    // btn.onclick = sayHello;// hum yha par perenthesis nhi lagayenge kyuki usse alert starting main hi print ho jayega
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function ()
{
    console.log("you double clicked");
});

}

function sayHello()
{
    alert("Hello");
}

function sayName()
{
    alert("ankit");
}