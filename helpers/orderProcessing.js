var mongoose = require('mongoose');
var ProductModel = require('../models/Product');
module.exports = function(){
    this.process = function(req, res, next) {
        req.body.userID = req.session.userID;

        ProductModel.find({_id: {$in: req.body.items}}, function(err, products){
            var total = products.reduce(function(sum, elem){
                return sum += elem.price;
            }, 0);

            req.body.total = total;
            next();
        });

        return {
            process: this.process
        }
    }
};