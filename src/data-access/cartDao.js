const cartModel = require("../models/cartModel");

const cartDao = {
  async findAll() {
    const result = await cartModel.find({}, { password: 0 });
    return result;
  },

  async findById(cartId) {
    const result = await cartModel.findById(cartId);
    return result;
  },

  async findByUserId(userId) {
    const result = await cartModel.find(userId);
    return result;
  },
  async create(cartData) {
    const createCart = await cartModel(cartData);
    const newcart = await createCart.save();
    if (newcart) return newcart;
    return false;
  },

  async update(cartId, cartData) {
    console.log(cartId);
    const edit = await cartModel.updateOne({_id: cartId}, cartData);
    if (edit) return this.findById(cartId);
    return false;
  },

  async remove(cartId) {
    await cartModel.deleteOne({ _id: cartId });
    return "Inventory Deleted";
  },
};

module.exports = cartDao;
