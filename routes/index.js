var express = require('express');
var router = express.Router();
var admin = require('./admin')();
var category = require('./category')();
var comment = require('./comment')();
var customer = require('./customer')();
var order = require('./order')();
var product = require('./product')();
var ErrorHandler = require('../handlers/errorHandler');
var errorHandler = new ErrorHandler();

router.use('/admin', admin);
router.use('/category', category);
router.use('/comment', comment);
router.use('/customer', customer);
router.use('/order', order);
router.use('/product', product);

router.get('/logout', function(req, res, next){
    req.session.destroy();
    res.status(200).send("done");
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.use(errorHandler.onError);

module.exports = router;
