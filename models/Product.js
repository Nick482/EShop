var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: 'string',
    category: {type: String, ref: 'Category'},
    price: 'number',
    desc: 'string',
    image: 'string',
    quantity: 'number',
    manufacturer: 'string',
    added: {type: 'string', default: Date.now()},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});
var ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;