const mongoose = require('mongoose'); 

const inventorySchema = new mongoose.Schema({
    userId: String,
    name: String,
    price: Number,
    quantity: Number,
    status: {
      type: String,
      enum: ["in-stock", "out-of-stock"],
      default: "in-stock"
    }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
