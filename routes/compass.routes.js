const router = require("express").Router();
// const mongoose = require("mongoose");

const User = require("../models/User.model");
const Compass = require("../models/Compass.model");

//  POST /api/compass  -  Creates a new compass
// router.post("/mycompasses", (req, res, next) => {
//   const { historyTitle, lastYear } = req.body;

//   CompassHistory.create({ historyTitle, lastYear })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

router.post("/mycompasses", async (req, res, next) => {
  try {
    const { compassTitle, userId } = req.body;

    const newCompass = await Compass.create({
      compassTitle,
      userId: userId,
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

// router.get("/mycompasses/:userId", async (req, res, next) => {
//   const { userId } = req.params;
//   try {
//     const allCompasses = await User.findById(userId).populate("compasses");
//     res.json(allCompasses);
//   } catch (err) {
//     res.json(err);
//   }
// });

module.exports = router;
