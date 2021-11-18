const userDao = require("../data-access/userDao");
const inventoryDao = require("../data-access/inventoryDao");
const inventoryEntity = require("../entities/inventoryEntity");

class inventoryService {
  static async create(userId, inventoryData) {
    try {
      const user = await userDao.findById(userId);
      if (user.role == "admin") {
        // make a new inventory object with inputed data
        const inventory = await new inventoryEntity(inventoryData).execute();
        if (inventory.details) throw new Error(inventory.details[0].message);

        const newInventory = await inventoryDao.create({
          userId: user.id,
          name: inventory.getName(),
          price: inventory.getPrice(),
          quantity: inventory.getQuantity(),
        });
        return { message: "New Inventory created", newInventory };
      } else {
        return "Sorry, only admin can create an inventory";
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAllInventories(userId) {
    try {
      const user = await userDao.findById(userId);
      if (user) {
        const allInvetories = await inventoryDao.findAll();
        return allInvetories.length > 0 ? allInvetories : "No inventory found";
      } else {
        return "Only authenticated users can view inventories";
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getSingleInventory(userId, inventoryId) {
    try {
      const user = await userDao.findById(userId);
      if (user) {
        const inventory = await inventoryDao.findById(inventoryId);
       // console.log(inventory).length;
        return inventory ? inventory : "No inventory found";
      } else {
        return "Only authenticated users can view inventories";
      }
    } catch (error) {}
  }

  static async editInventory(userId, inventoryId,  inventoryData) {
    try {
      const user = await userDao.findById(userId);
      if (user.role == "admin") {
          const inventoryExist = await inventoryDao.findById(inventoryId);
          if (inventoryExist) {
        // make a new inventory object with inputed data
        const inventory = await new inventoryEntity(inventoryData).validateEdit();
        if (inventory.details) throw new Error(inventory.details[0].message);

        const updatedInventory = await inventoryDao.update(inventoryId, inventoryData)
        return { message: "Inventory updated", updatedInventory };
              
          } else {
        return "Sorry, inventory not found";
          }
      } else {
        return "Sorry, only admin can update an inventory";
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteInventory (userId, inventoryId) {
      try {
    const user = await userDao.findById(userId);
    if (user.role == 'admin') {
        const inventoryExist = await inventoryDao.findById(inventoryId);
        if (inventoryExist) {
            await inventoryDao.remove(inventoryId);
            return " Inventory deleted!";
        } else {
            return 'Inventory not found'
        }
    } else {
        return "Sorry, only admin can delete an inventory";
    }
          
      } catch (error) {
        throw new Error(error.message);
          
      }
  }



}
module.exports = inventoryService;
