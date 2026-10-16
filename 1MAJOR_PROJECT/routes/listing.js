const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../Models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");


// index route
router.get("/", wrapAsync(async(req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
    
}));

//New Route 
router.get("/new",isLoggedIn, (req,res) => {
    res.render("listings/new.ejs");
});


// Show Route 
router.get("/:id", wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: {
        path: "author",
      },
    })
      .populate("owner");
    if(!listing) {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    else res.render("listings/show.ejs", {listing} );
}));


//Create Route
router.post("/", isLoggedIn, validateListing,wrapAsync(async (req,res,next) => {
    const newListing = new Listing(req.body.listing);
    console.log(req.user);
    newListing.owner = req.user._id;// req.user humare user ki bahut si information store karat hai lekin humko id hi chahiye
    await newListing.save();
    req.flash("success","New listing Created!");
    res.redirect("/listings");

}));


//edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    } 
    else  res.render("listings/edit.ejs",{listing});
}));


//Update Route 
router.put("/:id",validateListing, isLoggedIn, isOwner, wrapAsync(async(req,res) => {

    if(!req.body.listing) // iska mtlb h ki listings main koi data nhi h 
    // toh error print karwa do
    {
        throw new ExpressError(400,"Send valid data for listing");
    }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success","Listing Updated");
    res.redirect("/listings");

  })
);


//Deleted
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async(req,res) => {
    let {id} = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success","Listing Deleted!")
    res.redirect("/listings");
}));
module.exports = router;




