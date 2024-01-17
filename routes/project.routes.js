const router = require("express").Router();
// const mongoose = require("mongoose");

const CompassHistory = require("../models/CompassHistory.model");

//  POST /api/projects  -  Creates a new project
router.post("/mycompass", (req, res, next) => {
  const { historyTitle, lastYear } = req.body;

  CompassHistory.create({ historyTitle, lastYear })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
