var OrderModel = require('../models/Order');

module.exports = function() {
    this.getOrders = function(req, res, next){
        OrderModel.find({}, function(err, orders){
            if(err) {
                next(err);
            } else {
                res.status(200).send(orders);
            }
        })
    };
    this.getOrder = function(req, res, next){
        OrderModel.findOne({id: req.params.id}, function(err, order){
            if(err){
                next(err);
            } else {
                res.status(200).send(order);
            }
        })
    };
    this.createOrder = function(req, res, next) {
        var body = req.body;

        console.log(body);
        var order = new OrderModel(req.body);

        order.save(function(err, order){
            if(err) {
                next(err);
            } else {
                res.status(200).send(order);
            }
        })
    };


    this.updateOrder = function(req, res, next){
        OrderModel.find({id: req.body.id}, req.body, function(err, order){
            if(err) {
                next(err);
            } else {
                res.status(200).send(order)
            }
        })
    };
    this.deleteOrder = function(req, res, next){
        OrderModel.findOneAndRemove({id: req.params.id}, function(err){
            if(err) {
                next(err);
            } else {
                res.send("Order deleted")
            }
        })
    };

    return {
        getOrders: this.getOrders,
        getOrder: this.getOrder,
        createOrder: this.createOrder,
        updateOrder: this.updateOrder,
        deleteOrder: this.deleteOrder
    }
};