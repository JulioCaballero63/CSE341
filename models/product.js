/******************* 
 * This is the product Model
 * ***************/

const products = [];

module.exports = class Product {
    constructor(t, d) {
        this.title = t;
        this.description = d;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}