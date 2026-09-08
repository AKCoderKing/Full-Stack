const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public"))); // forusing the style.css file we use this
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


main().then( () => {   // establishment of connection
    console.log("connection successful");
}) 
.catch(err => console.log(err));

// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date()
// });

// chat1.save().then((res) => {
//     console.log(res);
// });


async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



// Index Route
app.get("/chats", async (req,res) => {
    let chats = await Chat.find() // is mai hum koi condition nhi denge kyuki huko joh h sabhi   chats chahiye 
    console.log(chats);
    res.render("index.ejs",{chats});
});

// New Route
app.get("/chats/new", (req,res)=> {
    res.render("new.ejs");
});

//Create Route
app.post("/chats",(req,res) => {
   let {from,to,msg} = req.body;
   let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
   });
   newChat
      .save()
      .then((res) => {
        console.log("chat was saved");
      })  
      .catch((err) => {
        console.log(err);
      });

   res.redirect("/chats");

});

//edit Route
app.get("/chats/:id/edit", async(req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

//Update Route
app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true,new: true});

    console.log(updatedChat);
    res.redirect("/chats");

});

//Destroy Route
app.delete("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let Deletedchat = await Chat.findByIdAndDelete(id);
    console.log(Deletedchat);
    res.redirect("/chats");
    
});

app.get("/",(req,res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
    
});




