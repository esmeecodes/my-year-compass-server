const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Compass = require("../models/Compass.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

// route to create the compass
router.post("/mycompasses", async (req, res, next) => {
  try {
    const { compassTitle, userId } = req.body;
    const newCompass = await Compass.create({
      compassTitle,
      user: userId,
    });

    await User.findByIdAndUpdate(userId, {
      $push: { compasses: newCompass._id },
    });

    res.json(newCompass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// route to show all the created compassess in the my-compass page
router.get("/mycompasses/:userId", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const allCompasses = await User.findById(userId).populate("compasses");
    res.json(allCompasses);
  } catch (e) {
    res.json(e);
  }
});

// route to show the compass in the editing page
router.get("/compass/overview/:compassId", async (req, res, next) => {
  const { compassId } = req.params;
  try {
    const oneCompassToEdit = await Compass.findById(compassId);
    res.json(oneCompassToEdit);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
