define(function(require){

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        selectedTemplate = require("text!./template/selectedTemplate.htm");


    var Selected = Backbone.View.extend({

        el: function(){
            var self = this;
            return	_.template("<div id='selectedItem'></div>")({
                options: self.options
            });
        },

        events: {
        "click #back" : "back"
        },

        constructor: function(data){
            this.options = data;
            this.initialize();
        },

        initialize: function () {
            this.setElement(this.el());
            this.render();
        },

        back: function(event){
          this.trigger("backToSearch", this, event)
        },

        render: function(){
            this.$el.html(_.template(selectedTemplate)({options: this.options}));
            $('#container').append(this.$el);
        }
    });
    return Selected;
});
