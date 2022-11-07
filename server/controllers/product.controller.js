const { Product }  = require('../models/product.model')

    module.exports.readAll = ( req, res ) => {
        Product.find()
        .then( products => res.json( { product: products } ))
        .catch( err => res.json( err ))
    }
    module.exports.createProduct = (req,res) => {
        const { title, price, description } = req.body;
        Product.create({
            title,
            price,
            description
        })
        .then( product => res.json( product ))
        .catch( err => res.json( err ))
    }
