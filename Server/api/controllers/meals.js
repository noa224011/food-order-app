const data = require("../routes/data");
const mealsSchema = require("../models/meals");

module.exports = {
  getAllMeals: (req, res) => {
    mealsSchema
      .find()
      .then((meals) => {
        res.status(200).json({ meals });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
  getMealById: (req, res) => {
    const mealId = req.params.mealId;

    mealsSchema
      .find({ id: mealId })
      .then((meal) => {
        res.status(200).json(meal);
      })
      .catch((error) => {
        res.status(500).json({
          message: `meal id not found ${mealId}`,
          error: error,
        });
      });
  },
};
