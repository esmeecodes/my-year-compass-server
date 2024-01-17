const router = require("express").Router();
// const mongoose = require("mongoose");

// const User = require("../models/User.model");
const CompassHistory = require("../models/CompassHistory.model");

//  POST /api/compass  -  Creates a new compass
// router.post("/mycompasses", (req, res, next) => {
//   const { historyTitle, lastYear } = req.body;

//   CompassHistory.create({ historyTitle, lastYear })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

router.post("/mycompasses", async (req, res, next) => {
  try {
    const { historyTitle, lastYear, userId } = req.body;

    const newHistoryCompass = await CompassHistory.create({
      historyTitle,
      lastYear,
      userId: userId,
    });

    await User.findByIdAndUpdate(userId, {
      $push: { historyCompasses: newHistoryCompass._id },
    });
    await CompassHistory.findByIdAndUpdate(newHistoryCompass._id, {
      $push: { user: userId },
    });
    res.json(newHistoryCompass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
