const { Router } = require('express'); 
const inventoryController = require('../controllers/inventoryController');
const  verifyToken = require('../middlewares/verifyToken'); 
const router = Router();
 
router.post('/inventory', verifyToken, inventoryController.createInventory);
router.patch('/inventory/:inventoryId', verifyToken, inventoryController.editInventory);
router.delete('/inventory/:inventoryId',verifyToken, inventoryController.deleteInventory);
router.get('/inventory', verifyToken, inventoryController.getAllInventories);
 router.get('/inventory/:inventoryId', verifyToken, inventoryController.getSingleInventory);
module.exports = router; 