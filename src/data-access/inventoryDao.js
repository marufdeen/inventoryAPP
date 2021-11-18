const inventoryModel = require("../models/inventoryModel");

const inventoryDao = {
  async findAll() {
    const result = await inventoryModel.find();
    return result;
  },

  async findById(inventoryId) {
    const result = await inventoryModel.findById(inventoryId);
    return result;
  },

  async findByUserId(userId) {
    const result = await inventoryModel.find(userId);
    return result;
  },
  async create(inventoryData) {
    const createInventory = await inventoryModel(inventoryData);
    const newInventory = await createInventory.save();
    if (newInventory) return newInventory;
    return false;
  },

  async update(inventoryId, inventoryData) { 
    const edit = await inventoryModel.updateOne({_id: inventoryId}, inventoryData);
    if (edit) return this.findById(inventoryId);
    return false;
  },

  async remove(inventoryId) {
    await inventoryModel.deleteOne({ _id: inventoryId });
    return "Inventory Deleted";
  },
};

module.exports = inventoryDao;
