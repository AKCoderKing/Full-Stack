const mongoose = require('mongoose');

main().then( () => {   // establishment of connection
    console.log("connection successful");
}) 

.catch(err => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema( {
    name : String, // capital letter l=main likhenge ye sab 
    email: String,
    age: Number,
});


const User = mongoose.model("User",userSchema);
 

// const user2 = new User( {
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age : 48,
// });

// user2.save().then((res) =>{
//     console.log(res);
// })
// .catch( (err) =>{
//     console.log(err)
// });

User.insertMany( [
    {name: "Tony",email: "tony@gamil.com",age:50},
    { name:"peter",email: "peter@gamil.com",age:30},
    {name: "Bruce", email:"bruce@gmail.com", age: 47},
]).then((res) => {
    console.log(res);
});
