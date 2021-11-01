const orderSchema = require("../models/order");

module.exports = {
  createNewOrder: (req, res) => {
    const { id, name, amount, price } = req.body;
    const order = new orderSchema({
      id,
      name,
      amount,
      price,
    });

    order
      .save()
      .then(() => {
        res.status(200).json({
          message: "Created new order successfully",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
};
