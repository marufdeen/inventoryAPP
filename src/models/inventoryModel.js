const mongoose = require('mongoose'); 

const inventorySchema = new mongoose.Schema({
    userId: String,
    name: String,
    price: Number,
    quantity: Number,
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
