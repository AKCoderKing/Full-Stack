const mongoose = require('mongoose');

main().then( () => {   // establishment of connection
    console.log("connection successful");
}) 

.catch(err => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); 
   // here amazon is the name of database
}




const bookSchema = new mongoose.Schema(
{// this is valid syntax for defining schema 
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type:String,
    },
    price: 
    {   
        type: Number, 
        min: [1,"Price is too low for Amazon selling"],
    }, 
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
});



const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Marvel Comics",
//     category: "fiction",
//     price: "1200",
//     genre: ["comics","superhero","fiction","marvel"]
// });

// book1.save().then((res) =>{
//     console.log(res);
// })
// .catch( (err) =>{
//     console.log(err)
// });

Book.findByIdAndUpdate("6a9f0be3861ffb87f8aaeb48",{price: -500} , {runValidators: true})
   .then((res) => {
    console.log(res);
   })
   .catch((err) => {
    console.log(err.errors.price.properties.message);
   })


