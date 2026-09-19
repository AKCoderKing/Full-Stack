const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req,res,next) => {
//     let {query} = req.query;
//     console.log(query);
//     console.log("Hi , I am middleware");
//     next();
// });

// app.use((req,res,next) => {

//     console.log("Hi , I am 2nd middleware");
//     next();
// });

// app.use((req,res,next) => {
//     res.time = Date.now();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

//API token as query string 

// app.use("/api",(req,res,next) => {
//     let {token} = req.query;
//     if(token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

// app.get("/api", (req,res) => {
//     res.send("data");
// });

// Multiple Middleware


const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api", checkToken, (req,res) => {
    res.send("data");
});


app.get("/", (req,res) => {
    res.send("Hi, I am root");
});

app.get("/random" ,(req,res) =>{
    res.send("this is a random page");
});

app.get("/err",(req,res) => {
    abcd = abcd;
});


app.use((err, req,res,next) => {
    console.log("----- ERROR-----");
    next(err);
});

app.use((err,req,res,next) => {
   console.log("----- ERROR2 Middleware-----");
    next(err);
});

//404 if page nhi milega toh ye chalega
app.use((req,res) => {
   res.send("Page not found");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});




