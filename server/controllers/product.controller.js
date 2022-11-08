const { Product }  = require('../models/product.model')

    module.exports.readAll = ( req, res ) => {
        Product.find()
        .then( products => res.json( products ))
        .catch( err => res.json( err ))
    }
    module.exports.readOne = ( req, res ) => {
        Product.findOne( { _id: req.params.id } )
        .then( product => res.json( product ))
        .catch( err => res.json( err ))
    }
    module.exports.createProduct = (req,res) => {
        const { title, price, description } = req.body;
        Product.create({
            title,
            price,
            description
        })
        .then( createdProduct => res.json( createdProduct  ))
        .catch( err => res.json( err ))
    }
    module.exports.updateProduct = ( req, res ) => {
        Product.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true } )
        .then( updatedProduct => res.json( updatedProduct))
        .catch( err => response.json( err ))
    }
    module.exports.delete = ( req, res ) => {
        Product.deleteOne( { _id: req.params.id} )
        .then( deletedProduct => res.json( deletedProduct ))
        .catch( err => response.json( err ))
    }
