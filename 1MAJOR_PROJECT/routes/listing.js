const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../Models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

router
  .route("/")
  .get( wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing),
  );

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get( wrapAsync(listingController.showListing))   // show route
    .put(      // update route
    validateListing,
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.updateLisitng),)
    .delete(   // delete route
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyLisitng),
    );

//edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;
