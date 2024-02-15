const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Compass = require("../models/Compass.model");
const FutureCompass = require("../models/FutureCompass.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

// route to create the two compass parts at the same time (future + past)
router.post("/mycompasses", async (req, res, next) => {
  try {
    const { compassTitle, userId } = req.body;
    const newCompass = await Compass.create({
      compassTitle,
      user: userId,
    });

    const newFutureCompass = await FutureCompass.create({
      compassTitle,
      user: userId,
    });

    await User.findByIdAndUpdate(userId, {
      $push: {
        compasses: newCompass._id,
        futureCompasses: newFutureCompass._id,
      },
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

// route to edit the compass
router.put("/compass/edit/:compassId", async (req, res, next) => {
  try {
    const { compassId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(compassId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }

    const compassUpdate = await Compass.findByIdAndUpdate(compassId, req.body, {
      new: true,
    });
    res.json(compassUpdate);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

// route to delete the compass:
router.delete("/compass/delete/:compassId", async (req, res, next) => {
  const { compassId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(compassId)) {
    res.status(400).json({ message: "Specified compassId is not valid" });
    return;
  }

  try {
    const deletedCompass = await Compass.findByIdAndDelete(compassId);

    if (!deletedCompass) {
      res.status(400).json({ message: "Compass not found" });
      return;
    }

    const userId = deletedCompass.userId;
    console.log("user ...", userId);
    await User.findByIdAndUpdate(userId, { $pull: { compasses: compassId } });

    res.json({
      message: `compass with ID ${compassId} is deleted succesfully`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error during deleting compass" });
  }
});

module.exports = router;
