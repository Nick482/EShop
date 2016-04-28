var CustomerModel = require('../models/Customer');
var Verify = require('../helpers/verify');
var verify = new Verify();

module.exports = function() {
    this.getCustomers = function(req, res, next){
        CustomerModel.find(
            {}, function(err, customers){
                if(err) {

                    return next(err);
                } else {
                    res.status(200).send(customers)
                }
            }
        )
    };
    this.getCustomer = function(req, res, next){
        CustomerModel.findOne({id: req.params.id}, function(err, customer){
            if(err){

                return next(err);
            } else {
                res.status(200).send(customer);
            }
        })
    };
    this.addCustomer = function(req, res, next){
        var body = req.body;
        body.login = body.email.substr(0, body.email.indexOf('@'));
        var customer = new CustomerModel(body);
        var type = body.verificationType;
        var random = require('../helpers/random')();

        customer.verificationQuery = random;

        customer.save(function(err, customer){
            if(err) {

                return next(err);
            } else {
                if (type === 'phone'){
                    // Twilio stuff
                }
                if (type === 'email'){
                    verify.byEmail({
                        email: body.email,
                        random: random
                    });
                }
                res.status(200).send(customer)
            }
        })
    };

    this.banCustomer = function(req, res, next){
        var id = req.params.id;
        CustomerModel.findByIdAndUpdate(id, {isBanned: true}, function(err, customer){
            if(err) {
                next(err);
            } else {
                res.status(200).send(customer);
            }
        })
    };
    
    this.login = function(req, res, next){
        var body = req.body;
        CustomerModel.findOne({email: body.email}, function(err, customer){
            if(err){

                return next(err);
            } else {
                if(!customer){

                    return res.status(400).send('No user with specified email');
                }
                if(customer.password !== body.password) {
                    res.status(400).send("Password incorrect");
                } else {
                    req.session.userID = customer._id;
                    res.send(customer);
                }
            }
        })
    };

    this.verify = function(req, res, next){
        var query = req.query;

        CustomerModel.findOneAndUpdate({verificationQuery: query},
            {
                verificationQuery: '',
                verified: true
            },
            function(err, customer){
            if(err){
                return next(err);
            }
            if(!customer){
                return res.status(404).send('Incorrect URL');
            } else {
                res.status(200).redirect('/');
            }
        })
    };
    
    this.updateCustomer = function(req, res, next){
        CustomerModel.update(
            {id: req.body.id},
            req.body,
            function(err){
                if(err) {

                    return next(err);
                } else {
                    res.send("Customer updated!")
                }
            }
        )
    };
    this.deleteCustomer = function(req, res, next){
        CustomerModel.findOne({id: req.params.id}, function(err, customer){
            if(err) {

                return next(err);
            } else {
                res.status(200).send(customer)
            }
        })
    };

    return {
        getCustomers: this.getCustomers,
        getCustomer: this.getCustomer,
        addCustomer: this.addCustomer,
        login: this.login,
        verify: this.verify,
        banCustomer: this.banCustomer,
        updateCustomer: this.updateCustomer,
        deleteCustomer: this.deleteCustomer
    }
};