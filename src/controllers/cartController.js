const cartService = require('../services/cartServices');

class cartController {
    /**
   * @author Maruf
   * @method  POST - createInventory
   * @desc Feature: create a new Inventory
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async createInventory(req, res) {
    try {
      const userId = req.decoded.userId;
      const inventoryId = req.params.inventoryId;
      const newcart = await cartService.create(userId, inventoryId,  req.body);
      return res.status(201).json({ message: newcart });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
    
}
module.exports = cartController;