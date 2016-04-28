define(['backbone', 'jquery', 'underscore', 'js-cookie', 'text!/templates/main/loginTemplate.html'],
    function(Backbone, $, _, Cookie, loginTemplate) {
    return Backbone.View.extend({
        el: loginTemplate,

        events: {
            'click .role': '_roleSwitch',
            'keyup': '_updateAttr',
            'click #confirm': '_confirm'
        },
        initialize: function () {
            this._user = {};
            this.role = 'customer';

            this.render();
        },

        _roleSwitch: function(event){
            this.role = $(event.target).data('attr');
        },

        _updateAttr: function(event){
            var attr = $(event.target).data('attr');
            var val = $(event.target).val();

            this._user[attr] = val;
        },

        _confirm: function(event){
            console.log(this._user);
            if(this.role === 'customer') {
                $.post('customer/login', this._user, function (data) {// TODO error handling
                    Cookie.set('session', data._id);
                    window.location.href = '';
                    // TODO model set
                });
            } else {
                $.post('/admin/login', this._user, function(data){
                    Cookie.set('session', data._id);
                    window.location.href = '';
                    // TODO model set
                })
            }
        },

        render: function () {

            return this;
        }
    });
});