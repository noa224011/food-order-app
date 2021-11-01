const express = require("express");
const router = express.Router();
const { createNewOrder } = require("../controllers/orders");

router.post("/", createNewOrder);

module.exports = router;
