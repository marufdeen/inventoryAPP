const { Router } = require('express');
const cartController = require('../controllers/cartController')
const  verifyToken = require('../middlewares/verifyToken'); 

const router = Router();

 router.post('/cart/:inventoryId', verifyToken, cartController.createInventory);

module.exports = router;