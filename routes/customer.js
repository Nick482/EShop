var CustomerHandler = require('../handlers/customerHandler');
var SessionChecker = require('../helpers/sessionChecker');
var CryptCtrl = require('../helpers/cryptCtrl');
var express = require('express');
var router = express.Router();
var Validate = require('../helpers/validate');

module.exports = function(){
    var customerHandler = new CustomerHandler();
    var sessionChecker = new SessionChecker();
    var cryptCtrl = new CryptCtrl();
    var validate = new Validate();

    router.get('/', sessionChecker.checkAdmin, customerHandler.getCustomers);
    router.get('/:id/ban', sessionChecker.checkAdmin, customerHandler.banCustomer);
    router.get('/:id', customerHandler.getCustomer);
    router.post('/', validate.customer, customerHandler.addCustomer);
    router.post('/login', customerHandler.login);
    router.get('/verify', customerHandler.verify);
    router.put('/', validate.customer, customerHandler.updateCustomer);
    router.delete('/:id', sessionChecker.checkAdmin, customerHandler.deleteCustomer);

    return router;
};