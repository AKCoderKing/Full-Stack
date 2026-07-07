let form = document.querySelector("form");
// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     alert("form submitted");
//     console.log("form sunbmitted");
// });

// extracting data from form 

// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi ${user.value}, your password is set to ${pass.value}`);

// });

// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi ${user.value}, your password is set to ${pass.value}`);
    
// });

// more events 

form.addEventListener("submit", function(event)
{
    event.preventDefault();
});


let user = document.querySelector("#user");
user.addEventListener("change",function()
{
    console.log("change eventd");
    console.log("final value = ",user.value);
});
user.addEventListener("input",function()
{
    console.log("input event");
    console.log("final value = ",user.value);
});

