const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userInfo: {
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  orderItems: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      amount: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
