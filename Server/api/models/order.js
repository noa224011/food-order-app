const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  order: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      amount: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
