let url = "https://catfact.ninja/fact";


async function getFacts()
{
    try{
    let res = await fetch(url);  // await isliye kyuki joh ye promise return karta h and url par jata h toh time leta h 
    let data = await res.json();  // ye bhi promise h 
    console.log(data.fact); // ye js h toh synchronous way main chlta h 
    
    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);

    }

    catch(e) {
        console.log("error -",e);
    }

}