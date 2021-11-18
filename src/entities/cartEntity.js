const validateCart = require('../helpers/cartValidator');

class cart {
    constructor(inventoryData) {
        this.inventoryData = inventoryData;
    }

    async _validateInventoryCreation() {
        return validateCart(this.inventoryData)
    } 
    async validateEdit() {
        const { error } = await validateCart(this.inventoryData);
        if(error) return error;
        return this;
    }
    getQuantity() {
        return this.inventoryData.quantity;
    }

    async execute(){
        const {error} = await this._validateInventoryCreation(); 
        if(error) return  error
        
        Object.freeze(this.inventoryData);

        return this;
    }
}

module.exports = cart