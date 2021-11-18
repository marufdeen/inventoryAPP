const mongoose = require('mongoose'); 

const cartSchema = new mongoose.Schema({
    userId: String,
    inventoryId: String,
    inventoryName: String,
    amount: Number,
    qty: Number,
}, { timestamps: true });

module.exports = mongoose.model('Comment', cartSchema);
