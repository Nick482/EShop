var ProductHandler = require('../handlers/productHandler');
var SessionChecker = require('../helpers/sessionChecker');
var ImageSaver = require('../helpers/imageSaver');
var express = require('express');
var router = express.Router();
var Validate = require('../helpers/validate');

module.exports = function(){
    var productHandler = new ProductHandler();
    var imageSaver = new ImageSaver();
    var sessionChecker = new SessionChecker();
    var validate = new Validate();

    router.get('/', productHandler.getProducts);
    router.get('/:id', productHandler.getProduct);
    router.post('/', sessionChecker.checkAdmin, imageSaver.saveImage, validate.product,  productHandler.addProduct);
    router.put('/:id', sessionChecker.checkAdmin, validate.product, productHandler.updateProduct);
    router.delete('/:id', sessionChecker.checkAdmin, productHandler.deleteProduct);

    return router;
};