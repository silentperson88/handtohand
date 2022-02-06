const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobileno: {
    type: String,
    require: true,
  },
  sourceAddress: {
    type: String,
    require: true,
  },
  destinationAddress: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Order", OrderSchema);
