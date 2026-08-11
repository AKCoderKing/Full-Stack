const express = require("express");
const app = express();
// console.dir(app);

let port = 3002;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res) => {
    res.send("you contracted root path");
});

app.get("/:username/:id",(req,res) => {

    let {username , id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);

});


app.get("/search",(req,res) => {

    let { q } =req.query; 
    console.log(req.query);
    res.send(`search results for query: ${q}`);

});





