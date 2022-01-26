const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
};

// with mongoose syntax.
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl,
        userId: req.user
    });
    product
        .save()
        .then(result => {
            console.log('Created Product');
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
};




// ************ Without mongoose
// exports.postAddProduct = (req, res, next) => {
//     const title = req.body.title;
//     const imageUrl = req.body.imageUrl;
//     const price = req.body.price;
//     const description = req.body.description;
//     const product = new Product(
//         title,
//         price,
//         description,
//         imageUrl,
//         null,
//         req.user._id
//     );
//     product
//         .save()
//         .then(result => {
//             // console.log(result);
//             console.log('Created Product');
//             res.redirect('/admin/products');
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };



// ********** this export works with and without mongoose, because mongoose has the findById method.
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            });
        })
        .catch(err => console.log(err));
};




// with mongoose syntax.
exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;

    Product.findById(prodId).then(product => {
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.description = updatedDesc;
        product.imageUrl = updatedImageUrl;
        return product.save()
    })
        .then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
};

// without mongoose.
// exports.postEditProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     const updatedTitle = req.body.title;
//     const updatedPrice = req.body.price;
//     const updatedImageUrl = req.body.imageUrl;
//     const updatedDesc = req.body.description;

//     const product = new Product(
//         updatedTitle,
//         updatedPrice,
//         updatedDesc,
//         updatedImageUrl,
//         prodId
//     );
//     product
//         .save()
//         .then(result => {
//             console.log('UPDATED PRODUCT!');
//             res.redirect('/admin/products');
//         })
//         .catch(err => console.log(err));
// };




// with mongoose.
exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(err => console.log(err));
};

// ********** without mongoose, the method fetchAll does not exist in mongoose so it needs to be changed to find().
// exports.getProducts = (req, res, next) => {
//     Product.fetchAll()
//         .then(products => {
//             res.render('admin/products', {
//                 prods: products,
//                 pageTitle: 'Admin Products',
//                 path: '/admin/products'
//             });
//         })
//         .catch(err => console.log(err));
// };




// mongoose does not have deleteById method, but it has findAndRemove.
exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log('DESTROYED PRODUCT');
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
};

// without mongoose
// exports.postDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.deleteById(prodId)
//         .then(() => {
//             console.log('DESTROYED PRODUCT');
//             res.redirect('/admin/products');
//         })
//         .catch(err => console.log(err));
// };