define(function(require){

    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        gridTemplate = require("text!./template/gridTemplate.htm"),
        ItemCollection = require("../itemCollection/ItemCollection");



    var Grid = Backbone.View.extend({
        el: gridTemplate,

        constructor: function(options){
            this.options = options;

            this.width = options.width;
            this.height = options.height;
            this.cellCollection = new ItemCollection({
                itemTemplate: options.cellTemplate,
                model: options.model,
                items: options.data || []
            });

            Backbone.View.apply(this, arguments);
        },

        initialize: function() {
            this.initEvents();
        },

        initEvents: function() {
            this.listenTo(this.cellCollection, "item:selected", this.onCellClick);
        },

        onCellClick:function(cellView, model) {
            this.trigger("cell:selected", cellView, model);
        },

        renderData: function(data) {
            var self = this;
            _.each(this.cellCollection.models, function(model){
                var item = self.cellCollection.addItem(model);
                self.cellCollection.renderItem(item);
            });
        },

        render: function(){
            this.$el.append(this.cellCollection.render().$el);
            return this;
        }

    });

    return Grid;
});
