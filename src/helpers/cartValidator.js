const Joi = require("joi");
const validateCart = (postData) => {
  const schema = Joi.object({ 
    quantity: Joi.number().required(),
  });

  return schema.validate(postData);
}; 

module.exports = validateCart;
