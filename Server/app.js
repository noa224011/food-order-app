const express = require("express");
var cors = require("cors");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@food-order-api.nyurr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected!");
});

const mealsRoutes = require("./api/routes/meals");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/meals", mealsRoutes);
app.use("/order", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
