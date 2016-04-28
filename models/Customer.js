var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
        login: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },
        status: 'string',
        email: {
            type: 'string',
            unique: true
        },
        phone: {
            type: 'string',
            unique: true
        },
        name:{
            type: 'string'//,
//                 required: true
        },
        lastName: {
            type: 'string'//,
//            required: true
        },
        verified: 'boolean',
        verificationType: 'string',
        verificationQuery: 'string',
        avatar: 'string',
        birthday: 'string',
        lastVisited: 'string',
        banned: 'boolean',
        cart: 'array'
});
var CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;