/**
 * Created by Nick on 8/12/2015.
 */
define(function(require){
    var Backbone = require('backbone'),
        binItemTemplate = require('text!./template/binItemTemplate.htm'),
        ItemCollection = require('components/itemCollection/ItemCollection');

    var BinPage = Backbone.View.extend({

    el: "<div id='binList'></div>",

    events: {
        "click .remove": "remove"
    },

    initialize: function(options){
        this.binCollection = new ItemCollection({
            model: options.model,
            itemTemplate: binItemTemplate,
            items: options.data
            });
        this.render();
    },

    addItem: function (model){
        this.binCollection.addItem(model);
    },

    remove: function(event){
        this.trigger("remove", this, event)
    },

    getItemsLength: function(){
        return this.binCollection.itemsCollectionView.length;
    },

    render: function(){
        this.$el.append(this.binCollection.render());
        $('#container').append(this.$el);
        this.$el.hide();
    }
    });
    return BinPage;
});