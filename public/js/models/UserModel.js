define(['backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            login: '',
            password: '',
            email: '',
            phone: ''
        }
    });
});