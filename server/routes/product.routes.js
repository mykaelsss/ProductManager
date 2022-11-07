const ProductController = require('../controllers/product.controller');

module.exports = function (app){
    app.get('/api', ProductController.readAll)
    app.post('/api/product', ProductController.createProduct)
}
