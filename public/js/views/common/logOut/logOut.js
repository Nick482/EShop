define(['backbone', 'jquery', 'underscore', 'js-cookie', 'text!/templates/common/logOutTemplate.html'],
        function(Backbone, $, _, Cookie, logOutTemplate){
    return Backbone.View.extend({
        el: logOutTemplate,

        events: {
            'click #logOutButton': '_logOut'
        },

        initialize: function(){

            this.render();
        },

        _logOut: function(){
            $.get('/logout', function(){
                Cookie.remove('session');
                window.location.href = '';
            });
        },

        render: function(){

            return this;
        }
    })
});