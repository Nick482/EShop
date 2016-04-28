var CategoryHandler = require('../handlers/categoryHandler');
var SessionChecker = require('../helpers/sessionChecker');
var express = require('express');
var router = express.Router();
var Validate = require('../helpers/validate');

module.exports = function(){
    var categoryHandler = new CategoryHandler();
    var sessionChecker = new SessionChecker();
    var validate = new Validate();

    router.get('/', categoryHandler.getCategories);
    router.get('/:id', categoryHandler.getCategory);
    router.post('/', validate.category, sessionChecker.checkAdmin, categoryHandler.addCategory);
    router.put('/:id', validate.category, sessionChecker.checkAdmin, categoryHandler.updateCategory);
    router.delete('/:id', sessionChecker.checkAdmin, categoryHandler.deleteCategory);

    return router;
};