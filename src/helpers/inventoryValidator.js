const Joi = require("joi");
const validateInventory = (postData) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
  });

  return schema.validate(postData);
}; 

module.exports = validateInventory;
