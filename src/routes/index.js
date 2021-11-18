const express = require('express'); 
const userRoutes = require('./userRoutes');
const inventoryRoutes = require('./inventoryRoutes');
const cartRoutes = require('./cartRoutes');
const router = express.Router();  

router.get("/", (req, res) => res.send("Welcome to Inventory Management App.")); 

// User Routes
router.use(userRoutes)

// Inventory Routes
router.use(inventoryRoutes);

// Cart Routes
router.use(cartRoutes); 

module.exports = router;
