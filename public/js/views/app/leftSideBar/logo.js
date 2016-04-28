define(['backbone', 'text!/templates/main/logoTemplate.html'], function(Backbone, logoTemplate){
    return Backbone.View.extend({

        el: logoTemplate,

        events: {
            'click' : '_toMain'
        },

        initialize: function(){
            this.render();
        },

        _toMain: function(){
            window.location.href = '';
        },

        render: function(){
            return this;
        }
    })
});