define(function(require){

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        selectedTemplate = require("text!./template/selectedTemplate.htm"),
        itemModel = require('components/main/model/itemModel');


    var Selected = Backbone.View.extend({

        el: function(){
            var self = this;
            return	_.template("<div id='selectedItem' code='<%= options.code %>'></div>")({
                options: self.model.toJSON()
            });
        },

        events: {
            "click #back" : "back",
            "click #addToCart": "add"
        },

        constructor: function(data){
            this.model = new itemModel(data || {});
            this.initialize();
        },

        initialize: function () {
            this.setElement(this.el());
        },

        back: function(event){
          this.trigger("backToSearch", this, event)
        },

        add: function(){
            this.trigger("addToCart", this, this.model)
        },

        setModelData: function(data){
            this.model.set(data);
            this.render();
        },

        render: function(){
            this.$el.html(_.template(selectedTemplate)({options: this.model.toJSON()}));
            $('#container').append(this.$el);
        }
    });
    return Selected;
});
