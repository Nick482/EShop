define(['backbone', 'underscore', '../models/CustomerModel'], function(Backbone, _, CustomerModel) {
    return Backbone.Collection.extend({
        model: CustomerModel,
        url: '/customer/'
    });
});