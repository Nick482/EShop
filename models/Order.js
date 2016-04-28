var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    user: 'string',
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    total: 'number'
});
var OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;