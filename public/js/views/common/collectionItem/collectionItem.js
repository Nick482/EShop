define(['backbone', 'underscore'], function(Backbone, _){
    return Backbone.View.extend({

        el: function(){
            return _.template(this.template)(
                model = this.model
            )
        },

        constructor: function(model, template){
            if(model instanceof Backbone.Model){
                this.model = model.toJSON();
            } else {
                this.model = model;
            }
            this.template = template;
            this.initialize();
        },

        initialize: function(){
            this.setElement(this.el(this.model));

            this.render();
        },

        render: function(){

            return this;
        }
    })
});