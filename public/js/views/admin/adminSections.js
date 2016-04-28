define(['backbone', 'jquery', 'text!/templates/admin/sectionsTemplate.html'],
    function(Backbone, $, sectionsTemplate){
        return Backbone.View.extend({

            el: sectionsTemplate,

            events: {
                'click': '_selection'
            },

            initialize: function(){
                this.render();
            },

            _selection: function(event){
                this.trigger('selectSection', event);
                $('.sectionButtons').removeClass('active');
                $(event.target).parent().addClass('active');
            },

            render: function(){
                return this;
            }
        })
    }
);