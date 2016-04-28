var ProductModel = require('../models/Product');

module.exports = function() {
    this.getProducts = function(req, res, next) {
        var name = req.query.name;
        var page = req.query.page;
        var category = req.query.category;
        var searchCat = {};

        if (page) {
            if (category) {
                searchCat = {'category': category};
            }
            ProductModel.find(searchCat || {}).sort({'name': -1}).skip((page - 1) * 20).limit(20).exec(function (err, products) {
                if (err) {

                    return next(err);
                } else {

                    return res.send(products);
                }
            })
        }

        if (name) {
            var condition = new RegExp('^' + name, 'i');
            ProductModel.find({name: condition}, function (err, products) {
                if (err) {

                    return next(err);
                } else {

                    return res.status(200).send(products);
                }
            })
        }
        if (!page) {
            ProductModel.find({}).sort({'added': -1}).limit(20).exec(function (err, products) {
                if (err) {

                    return next(err);
                } else {

                    return res.status(200).send(products);
                }
            })
        }
    };

    this.getProduct = function(req, res, next){
        ProductModel.findOne({_id: req.params.id})
            .populate('comments')
            .exec(function(err, product){
            if(err){
                next(err);
            } else {
                res.status(200).send(product);
            }
        });
    };

    this.addProduct = function(req, res, next){
        var product = new ProductModel(req.body);

        product.save(function(err, product){
            if(err) {
                next(err);
            } else {
                res.send(product)
            }
        })
    };
    this.updateProduct = function(req, res, next){
        var id = req.params.id;

        ProductModel.findByIdAndUpdate(
            id,
            req.body,
            function(err, product){
                if(err) {
                    next(err);
                } else {
                    res.status(200).send(product);
                }
            }
        )
    };
    this.deleteProduct = function(req, res, next){
        var id = req.params.id;

        ProductModel.findByIdAndRemove(id, function(err, product){
            if(err) {
                next(err);
            } else {
                res.status(200).send(product._id);
            }
        })
    };

    return {
        getProducts: this.getProducts,
        getProduct: this.getProduct,
        addProduct: this.addProduct,
        updateProduct: this.updateProduct,
        deleteProduct: this.deleteProduct
    }
};