var mongoose = require('mongoose');
var AdminSchema = new mongoose.Schema({
    login: 'string',
    password: 'string',
    status: 'string',
    email: 'string',
    phone: 'number'
});
var AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;