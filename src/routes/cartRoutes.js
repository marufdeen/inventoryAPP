const { Router } = require('express');
const cartController = require('../controllers/cartController')
const  verifyToken = require('../middlewares/verifyToken'); 

const router = Router();

 router.post('/catt/:inventoryId', verifyToken, cartController);

module.exports = router;