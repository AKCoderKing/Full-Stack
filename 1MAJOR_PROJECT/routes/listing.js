const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../Models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// index route
router.get("/", wrapAsync(listingController.index));

//New Route 
router.get("/new",isLoggedIn, listingController.renderNewForm );



// Show Route 

router.get("/:id", wrapAsync(listingController.showListing));


//Create Route
router.post("/", isLoggedIn, validateListing,wrapAsync( listingController.createListing ));


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




