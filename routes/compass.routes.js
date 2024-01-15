// routes/project.routes.js

const router = require("express").Router();
const express = require("express");
// const mongoose = require("mongoose");

const User = require("../models/User.model");
const CompassHistory = require("../models/CompassHistory.model");
const CompassFuture = require("../models/CompassFuture.model");

//  POST /api/compass  -  Creates a new compass
router.post("/my-compass", (req, res, next) => {
  const { historyTitle, futureTitle, userId } = req.body;

  ?.create({ historyTitle, lastYear, lastYearsHappenings })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
