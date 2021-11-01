const orderSchema = require("../models/order");

module.exports = {
  createNewOrder: (req, res) => {
    const order = req.body.order;
    console.log("body:", req.body);
    console.log("order", order);
    const newOrder = new orderSchema({
      order,
    });

    newOrder
      .save()
      .then((order) => {
        res.status(200).json({
          message: "Created new order successfully",
          order,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
};
