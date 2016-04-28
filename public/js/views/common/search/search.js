define(['backbone', 'jquery', 'text!/templates/common/searchTemplate.html'],
    function(Backbone, $, searchTemplate){
        return Backbone.View.extend({

            el: searchTemplate,

            events: {
                'keyup' : '_change'
            },

            initialize: function(){

                this.render();
            },

            _change: function(event){
                var searchString = $(event.target).val();
                this.trigger('search', searchString);
            },

            render: function(){

                return this;
            }
        })
    }
);