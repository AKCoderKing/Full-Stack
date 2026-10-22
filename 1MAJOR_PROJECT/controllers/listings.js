const Listing = require("../Models/listing")

module.exports.index = async (req,res) => {
   const allListings = await Listing.find({});
   res.rednder("listings/index.ejs", { allListings });

}







