const ProductController = require('../controllers/product.controller');

module.exports = function (app){
    app.get('/api/product/all', ProductController.readAll)
    app.get('/api/products/:id', ProductController.readOne)
    app.post('/api/product', ProductController.createProduct)
}
