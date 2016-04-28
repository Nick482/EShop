var validator = require('validator');
var CategoryModel = require('../models/Category');
var ProductModel = require('../models/Product');

module.exports = function(){

    this.customer = function(req, res, next){
        var body = req.body;
//        var _customer = {};
        var errors = [];

//        if(!validator.isAlpha(body.name.toString()) ){
//            errors.push('Name can only contain letters')
//        }
//
//        if(!validator.isAlpha(body.lastName.toString())){
//            errors.push('Last name can only contain letters')
//        }
        
        if(!validator.isEmail(body.email.toString())){
            errors.push('Please, enter a valid E-mail')
        }
        
        if(!body.password.toString()){
            errors.push('Please, enter a password')
        }
        
        if(body.dateOfBirth && (!validator.isDate(body.dateOfBirth.toString()) || Date.now() < body.dateOfBirth)){
            errors.push('Please, enter a valid date')
        }

        if(errors.length === 0){
            return next();
        } else {
            return res.status(400).send(errors);
        }
    };

    this.product = function(req, res, next){
        var body = req.body;
//        var _product = {};
        var errors = [];
        
        if(!body.name){
            errors.push('Please, enter the name of the product')
        }
        
        if(!body.category){
            errors.push('Please, specify a category the product belongs to')
        } else{
            CategoryModel.findOne({name: body.category}, function(err, category){
                body.category = category._id;
            })
        }
        
        if(!body.price || !validator.isNumeric(body.price.toString())){
            errors.push('Please, enter a valid price')
        }

        if(!body.desc){
            errors.push('Please, enter some description')
        }

        if(!body.quantity){
            errors.push('Please, enter the quantity of products in stock')
        }

        if(!body.manufacturer){
            errors.push('Please, enter the product\'s manufacturer')
        }

        if(errors.length === 0){
            return next();
        } else{
            return res.status(400).send(errors)
        }
    };

    this.comment = function(req, res, next){
        var body = req.body;
//        var _comment = {};
        var errors = [];

        if(!body.content){
            errors.push('Empty comments are not allowed')
        }

        if(!req.session.userID){
            errors.push('Only registered customers are allowed to comment')
        }

        if(errors.length === 0){

            return next()
        } else{

            return res.status(400).send(errors)
        }
    };

    this.admin = function(req, res, next){
        var body = req.body;
//        var _admin = {};
        var errors = [];

        if(!body.login || !validator.isAlphanumeric(body.login)){
            errors.push('Please, specify login')
        }

        if(!body.password){
            errors.push('Please, enter a valid password')
        }

        if(errors.length === 0){
            return next();
        } else{
            return res.status(400).send(errors);
        }
    };

    this.category = function(req, res, next){
        var body = req.body;
//        var _category = {};
        var errors = [];

        if(!body.name || !validator.isAlpha(body.name)){
            errors.push('Please, enter a valid category name');

            return res.status(400).send(errors)
        }else {
            return next();
        }
    };

    return {
        customer: this.customer,
        product: this.product,
        comment: this.comment,
        admin: this.admin,
        category: this.category
    }
};