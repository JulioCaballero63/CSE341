const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add Product', path: 'admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
};

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title, description: req.body.description });
    const product = new Product(req.body.title, req.body.description);
    product.save();
    res.redirect('/');
};