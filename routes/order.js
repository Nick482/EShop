var OrderHandler = require('../handlers/orderHandler');
var express = require('express');
var router = express.Router();
var OrderProcessing = require('../helpers/orderProcessing');

module.exports = function(){
    var orderHandler = new OrderHandler();
    var orderProcessing = new OrderProcessing();

    router.get('/', orderHandler.getOrders);
    router.get('/:id', orderHandler.getOrder);
    router.post('/', orderProcessing.process, orderHandler.createOrder);
    router.put('/', orderHandler.updateOrder);
    router.delete('/:id',orderHandler.deleteOrder);

    return router;
};