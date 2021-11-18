const userDao = require("../data-access/userDao");
const inventoryDao = require("../data-access/inventoryDao");
const cartDao = require("../data-access/cartDao");
const cartEntity = require("../entities/cartEntity");

class cartService {
  static async create(userId, inventoryId, cartData) {
    try {
      const user = await userDao.findById(userId);
      if(!user) return "Sorry, only authenticated users can add inventory to a cart";

      const inventory = await inventoryDao.findById(inventoryId);
      if(!inventory) return "Sorry, inventory not found";

      if(inventory.quantity == 0 ) return "Sorry, inventory is out of stock";
      // make a new inventory object with inputed data
      const cart = await new cartEntity(cartData).execute();
      if (cart.details) throw new Error(cart.details[0].message);

      if(inventory.quantity < cart.getQuantity()) return "Sorry, we don't have to your requested quantity";

      const newCart = await cartDao.create({
        userId: user.id,
        inventoryId: inventory.id,
        inventoryName: inventory.name,
        inventoryPrice: inventory.price,
        quantity: cart.getQuantity(),
        amount: inventory.price * cart.getQuantity(),
      });
      await inventoryDao.update(inventoryId, { quantity: inventory.quantity - cart.getQuantity()});
      return {
        message: "Inventory has been successfully added to you cart",
        newCart,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = cartService;
