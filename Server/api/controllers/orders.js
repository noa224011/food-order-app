const orderSchema = require("../models/order");

module.exports = {
  createNewOrder: (req, res) => {
    const userInfo = req.body.userInfo;
    const orderItems = req.body.orderItems;
    const newOrder = new orderSchema({
      userInfo,
      orderItems,
    });

    newOrder
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

  getOrderById: (req, res) => {
    const orderId = req.params.orderId;

    orderSchema
      .findById(orderId)
      .then((order) => {
        res.status(200).json({
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
