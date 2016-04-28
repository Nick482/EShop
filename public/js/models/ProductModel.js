define(['backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            name: '',
            category: '',
            price: '',
            desc: '',
            image: '',
            quantity: '',
            manufacturer: ''
        },
        idAttribute: '_id',
        urlRoot: '/product/'
    });
});