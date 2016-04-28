define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _){

    return Backbone.View.extend({

        el: function() {
        return _.template(this.template)()
        },

        events: {
            'keyup': '_setAttr',
            'click #addButton': '_saveModel',
            'click #clearButton': '_clearModel'
        },

        constructor: function(model, template){
            this.Model = model;
            this.model = new this.Model();
            this.template = template;

            this.initialize();
        },

        initialize: function(){
            this.setElement(this.el());

            this.render();
        },

        _setAttr: function(event){
            var attr = $(event.target).data('attr');
            var attrValue = $(event.target).val();
            this.model.set(attr, attrValue);
        },

        _saveModel: function(event){
            var self = this;
            this.model.save({}, {success: function(model){
                self.trigger('itemAdded', model);
            }});
            this.model = new this.Model();
        },

        _clearModel: function(event){
            this.model.clear().set(this.model.defaults);
            this.$el.find('input').val('');
        },

        render: function(){
            return this;
        }

    })
    }
);