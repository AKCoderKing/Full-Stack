const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");



app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public"))); // forusing the style.css  file we use this
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


main().then( () => {   // establishment of connection
    console.log("connection successful");
}) 
.catch(err => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date()
// });

// chat1.save().then((res) => {
//     console.log(res);
// });


// async function main() {
//    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }




// Index Route
app.get("/chats", async (req,res) => {
    let chats = await Chat.find() // is mai hum koi condition nhi denge  kyuki huko joh h sabhi   chats chahiye 
    console.log(chats);
    res.render("index.ejs",{chats});
});

// New Route
app.get("/chats/new", (req,res)=> { // we throw error from a async route 
    // throw new (404, "Page not found");
    res.render("new.ejs");
});

//Create Route
app.post("/chats",asyncWrap(async (req,res,next) => {
    
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    await newChat.save();    
    res.redirect("/chats");
    
}));

function asyncWrap(fn)
{
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    };
}

// New - show Route
app.get("/chats/:id",asyncWrap(async (req,res,next) => {
    // try block uske liye h jab id mil hi nhi rhi ho toh error de do
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if(!chat ) { 
            next(new ExpressError(404, "chat not found"));
        }
        res.render("edit.ejs",{ chat });
    

}));



//edit Route
app.get("/chats/:id/edit", async(req,res,next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});


//Update Route
app.put("/chats/:id", asyncWrap(async (req,res,next ) => {
   
        let {id} = req.params;
        let {msg: newMsg} = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg},  {runValidators: true,new: true});

        console.log(updatedChat);
        res.redirect("/chats");
    


}));

//Destroy Route
app.delete("/chats/:id", async (req,res,next) => {
    try{
        let {id} = req.params;
        let Deletedchat = await Chat.findByIdAndDelete(id);
        console.log(Deletedchat);
        res.redirect("/chats");
    }
    catch(err) {
        next(err);
    }
    
});

app.get("/",(req,res) => {
    res.send("root is working");
});

const handleValidationErr = (err) => {
    console.log("Validation error occured ,Please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err,req,res,next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
});

//Error Handling Middleware
app.use((err, req,res,next) => {
    let {status=500, message="Some Error Occured"} = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
    
});




