// h1 = document.querySelector("h1");

// setTimeout(() =>
// {
//     h1.style.color = "red";
// });

// setTimeout(() =>
// {
//     h1.style.color = "yellow";
// });

// setTimeout(() =>
// {
//     h1.style.color = "orange";
// });
// in above we write same code again and again  by below we short the code and process called callback hell 

// function changecolor(color,delay,nextColorChange)
// {
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange)  nextColorChange();
//     },delay);
// }

// changecolor("red",1000,() =>{
//     changecolor("orange",1000,() =>{
//         changecolor("yellow",1000,() =>{
//            changecolor("blue",1000,() =>{
//            });
//         });
//     });
// });

// callback nesting is called callbackhell 

// promises 

// function savetodb(data)
// {
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4) {
//         console.log("your data was saved : ", data);
//     }
//     else {
//         console.log("weak connection. data not saved");
//     }
// }

// function savetodb(data,success,failure)
// {
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savetodb("apnacllege",
//     () =>{
//         console.log(" success: your data was saved : ");
//         savetodb("hello world",
//         () =>{
//             console.log(" success2: your data was saved : ");
//             savetodb("Ak varshney",
//             () =>{
//                 console.log(" success3: your data was saved : ");
                
//             },
//             () =>{
//                 console.log(" failure3 : weak connection. data not saved");
//             }
//         )
//         },
//         () =>{
//             console.log(" failure2 : weak connection. data not saved");
//         }
//     )
//     },
//     () =>{
//         console.log(" failure : weak connection. data not saved");
//     }
// );

// Promises 

// function savetodb(data)
// {
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random()*10) +1;
//         if(internetSpeed > 4) {
//             resolve("success: data was saved");
//         }
//         else {
//             reject("failure: data was not saved");
//         }
//     });
// }

// let request = savetodb("apnacllege");
// request.then(() =>
// {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(() =>{
//     console.log("promise was rejected");
//     console.log(request);
// });

// savetodb("apnacllege").then((result) =>
// {
//     console.log("data1 saved");
//     console.log("result of promise :",result);
//     return savetodb("helloworld");
    
// })
// .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise :",result);
//     return savetodb("helloworld");
// })
// .then ((result) => {
//     console.log("data3 saved");
//     console.log("result of promise :",result);

// })
// .catch((error) =>{
//     console.log("promise was rejected");
//      console.log("error of promise :",error);

// });


// ab change color par promises lgate h 
 
h1 = document.querySelector("h1");
function changeColor(color,delay)
{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            h1.style.color = color;
            resolve("color changed");
        },delay);
    });
}

changeColor("red",1000)
.then(() =>{
    console.log("red color was completed");
    return changeColor("orange",1000);

})
.then(() => {
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(() => {
    console.log("blue color was completed");
});