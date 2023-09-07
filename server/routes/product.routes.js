const ProductController = require('../controllers/product.controller');


module.exports = function(app){
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneSingleProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
    app.get('/api/product/random', ProductController.getRandomProduct);
}



