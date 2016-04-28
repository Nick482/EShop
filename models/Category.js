var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema({
    name: 'string',
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
});
var CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;