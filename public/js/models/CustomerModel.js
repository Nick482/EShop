define(['backbone', 'underscore', './UserModel'], function(Backbone, _, UserModel){
    return UserModel.extend({
        defaults: _.extend({}, UserModel.prototype.defaults, {
            avatar: '',
            birthday: '',
            lastVisited: '',
            verificationType: '',
            verified: false,
            banned: false,
            status: '',
            cart: []
        }),
        idAttribute: '_id',
        urlRoot: '/customer/'
    })
});