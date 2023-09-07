const { Product } = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ product: oneSingleProduct })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description,
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}

// function to get a random product
module.exports.getRandomProduct = (req, res) => {
    Product.find()
    .then((allProducts) => {
        const productsLength = allProducts.length;
        const randomIndex = Math.floor(Math.random() * productsLength);
        const randomProduct = allProducts[randomIndex];
        res.json({ product: randomProduct })
    })
    .catch((err) => {
        res.json(err)
    });
}