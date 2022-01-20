/******************* 
 * This is the product Model
 * ***************/

const products = [];
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb => {
    // const p = path.join(rootDir, 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            // return [];
            cb([]);
        } else { cb(JSON.parse(fileContent)); }
        // return JSON.parse(fileContent);

    });
    // return products;
};

module.exports = class Product {
    constructor(t, d) {
        this.title = t;
        this.description = d;
    }

    save() {
        // products.push(this);
        // const p = path.join(rootDir, 'data', 'products.json');
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        // fs.readFile(p, (err, fileContent) => {
        //     let products = [];
        // if (!err) {
        //     products = JSON.parse(fileContent);
        // }
        // products.push(this);
        // fs.writeFile(p, JSON.stringify(products), (err) => {
        //     console.log(err);
        // });
        // });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}