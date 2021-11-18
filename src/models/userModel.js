const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String, 
  email: { type: String, unique: true },
  password: String,
  enabled: {
    type: Boolean, 
    enum: [true, false],
    default: true
  },
  role: {
    type: String, 
    enum: ["admin", "customer"],
    default: "customer"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
