const Listing = require("../Models/listing")

module.exports.index = async (req,res) => {
   const allListings = await Listing.find({});
   res.rednder("listings/index.ejs", { allListings });

}

module.exports.renderNewForm = (req,res) =>{

   res.render("listing/new.ejs");
   
};

module.exports.showListing = async(req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id)
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
};


module.exports.createListing = async(req,res,next) => {
   const newListing = new Listing(req.body.listing);
   console.log(req.user);
   newListing.owner = req.user._id;// req.user humare user ki bahut si information store karat hai lekin humko id hi chahiye
   await newListing.save();
   req.flash("success","New listing Created!");
   res.redirect("/listings");

};
