const express = require("express");
const router = express.Router();
const { getAllMeals, getMealById } = require("../controllers/meals");

router.get("/", getAllMeals);

router.get("/:mealId", getMealById);

module.exports = router;
