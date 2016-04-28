define(['backbone', 'underscore', '../models/ProductModel'], function(Backbone, _, ProductModel) {
    return Backbone.Collection.extend({
        model: ProductModel,
        url: '/product/'
    });
});