// let jsonRes =` {"fact":"The cat appears to be the only domestic companion animal not mentioned in the Bible.","length":84}`;

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

let url = "https://catfact.ninja/fact";

// fetch(url)
//    .then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
//    })
//    .catch((err) => {
//     console.log("ERROR - ", err);
//    });

fetch(url) // yha se request gyi 
   .then((response) => {
    console.log(response); 
     return response.json()  // request successful then json format main return 
    })
    .then((data) => {  // yha se data print hua 
        console.log("data1 = ", data.fact);
        return fetch(url);
   })
   .then((response) => {
     return response.json()  
    })
    .then((data2) => {  // yha se data print hua 
        console.log("data2 = ",data2.fact);
   })
   .catch((err) => {
    console.log("ERROR - ", err);
   });

console.log("i am happy");

