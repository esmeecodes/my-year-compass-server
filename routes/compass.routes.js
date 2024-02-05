const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Compass = require("../models/Compass.model");

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
    await Compass.findByIdAndUpdate(newCompass._id, {
      $push: { user: userId },
    });
    res.json(newCompass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/mycompasses/:userId", async (req, res, next) => {});

module.exports = router;
