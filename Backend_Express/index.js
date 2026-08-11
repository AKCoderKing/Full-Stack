const express = require("express");
const app = express();
// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res) => {
    res.send("you contracted root path");
});

app.get("/apple",(req,res) => {
    res.send("you contracted apple path");
});

app.get("/orange",(req,res) => {
    res.send("you contracted orange path");
});

app.get("/*splat", (req, res) => {
    res.send("Page not found");
});

app.post("/", (req, res) => {
    res.send("you sent a post request to root");
});

// app.use((req,res) => {

//     // console.log(req);
//     console.log("request received");
//     res.send("this is a basic response");
// });


