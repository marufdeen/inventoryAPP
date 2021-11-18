const mongoose = require('mongoose'); 

const cartSchema = new mongoose.Schema({
    userId: String,
    inventoryId: String,
    inventoryName: String,
    inventoryPrice: Number,
    quantity: Number,
    amount: Number,
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
