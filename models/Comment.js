var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
    content: 'string',
    user: {type: String, ref: 'User'},
    product: {type: String, ref: 'Product'},
    rating: 'number',
    date: 'string'
});
var CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
