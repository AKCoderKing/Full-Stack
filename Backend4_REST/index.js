const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();  

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [ // const isliye nhi banayenge kyuki humko isko dlt bhi karna h

    {
        id: uuidv4(),
        username : "apnacollege",
        content : "I love coding!"
    },

    {
        id: uuidv4(),
        username : "shradhakhapra",
        content : "Hard work is important to achieve success"
    },

    {
        id: uuidv4(),
        username : "rahulkumar",
        content : "I got selected for my 1st interenship!"
    },
];

app.get("/posts/new",(req,res) => {

    res.render("new.ejs");

});



app.get("/posts",(req,res) => {
    res.render("index.ejs",{ posts });
});


app.post("/posts",(req,res) =>
{

    let {username,content} = req.body; 
    let newid = uuidv4();
    posts.push({username,content,newid});
    res.redirect("/posts");

});



app.get("/posts/:id",(req,res) => {

    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
    
});

app.get("/posts/new",(req,res) => {

    res.render("edit.ejs");

});

app.patch("/posts/:id",(req,res) =>
{

    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    console.log(id);
    res.send("patch request working");

});




app.listen(port, () => {
    console.log("listening to port : 8080");
});



