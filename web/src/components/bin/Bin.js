define(function(require){

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        binTemplate = require("text!./template/binTemplate.htm");


    var Selected = Backbone.View.extend({

        el: function(){
            var self = this;
            return	_.template("<div id='bin'></div>")({
                options: self.options
            });
        },

        events: {
            "click #bin" : "openBin"
        },

        constructor: function(data){
            this.options = data;
            this.initialize();
        },

        initialize: function () {
            this.setElement(this.el());
        },

        openBin: function(event){
            this.trigger("openBin", this, event)
        },

        update: function(options){
            this.$el.remove();
            this.$el.html(_.template(binTemplate)({options: options}));
            $('#container').append(this.$el);
        },

        render: function(){
            this.$el.html(_.template(binTemplate)({options: this.options}));
            $('#container').append(this.$el);
        }
    });
    return Selected;
});