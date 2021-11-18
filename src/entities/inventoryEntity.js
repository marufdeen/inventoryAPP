const validateInventory = require('../helpers/inventoryValidator');

class inventory {
    constructor(inventoryData) {
        this.inventoryData = inventoryData;
    }

    async _validateInventoryCreation() {
        return validateInventory(this.inventoryData)
    } 
    async validateEdit() {
        const { error } = await validateInventory(this.inventoryData);
        if(error) return error;
        return this;
    }  
    getName() {
        return this.inventoryData.name;
    }

    getPrice() {
        return this.inventoryData.price;
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

module.exports = inventory