var AdminHandler = require('../handlers/adminHandler');
var SessionChecker = require('../helpers/sessionChecker');
var express = require('express');
var router = express.Router();


module.exports = function(){
    var adminHandler = new AdminHandler();
    var sessionChecker = new SessionChecker();

    router.get('/', sessionChecker.checkAdmin, adminHandler.renderAdmin);
    router.post('/', adminHandler.createAdmin);
    router.post('/login', adminHandler.login);
    router.put('/:id', sessionChecker.checkAdmin, adminHandler.updateAdmin);
    router.delete('/:id', sessionChecker.checkAdmin, adminHandler.deleteAdmin);

    return router;
};