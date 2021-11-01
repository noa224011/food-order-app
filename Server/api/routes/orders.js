const express = require("express");
const router = express.Router();
const { createNewOrder, getOrderById } = require("../controllers/orders");

router.post("/", createNewOrder);
router.get("/:orderId", getOrderById);

module.exports = router;
