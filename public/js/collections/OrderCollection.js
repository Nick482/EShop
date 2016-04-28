define(['backbone', 'underscore', '../models/OrderModel'], function(Backbone, _, OrderModel) {
    return Backbone.Collection.extend({
        model: OrderModel,
        url: '/order/'
    });
});