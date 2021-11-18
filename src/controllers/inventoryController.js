const inventoryService = require("../services/inventoryServices");

class inventoryController {
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
      const newInventory = await inventoryService.create(userId, req.body);
      return res.status(201).json({ message: newInventory });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  PATCH - editInventory
   * @desc Feature: create a new Inventory
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async editInventory(req, res) {
    try {
      const userId = req.decoded.userId;
      const inventoryId = req.params.inventoryId;
      const updatedInventory = await inventoryService.editInventory(
        userId,
        inventoryId,
        req.body
      );
      return res.status(201).json({ message: updatedInventory });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  DELETE - createInventory
   * @desc Feature: create a new Inventory
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */

  static async deleteInventory(req, res) {
    try {
      const userId = req.decoded.userId;
      const inventoryId = req.params.inventoryId;
      const deletedInventory = await inventoryService.deleteInventory(
        userId,
        inventoryId
      );
      return res.status(200).json({ message: deletedInventory });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  GET - getAllInventories
   * @desc Feature: Fetch all Inventories from DB
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async getAllInventories(req, res) {
    try {
      const userId = req.decoded.userId;
      const allInventories = await inventoryService.getAllInventories(userId);
      return res.status(201).json({ message: allInventories });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  GET - getSingleInventory
   * @desc Feature: Fetch an Inventory from DB
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async getSingleInventory(req, res) {
    try {
      const { userId } = req.decoded;
      const { inventoryId } = req.params;
      const inventory = await inventoryService.getSingleInventory(
        userId,
        inventoryId
      );
      return res.status(201).json({ message: inventory });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = inventoryController;
