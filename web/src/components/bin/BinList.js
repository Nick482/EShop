/**
 * Created by Nick on 8/12/2015.
 */
define(function(require) {
	
    var Backbone = require('backbone'),
        binItemTemplate = require('text!./template/binItemTemplate.htm'),
        ItemCollection = require('components/itemCollection/ItemCollection');

    var BinList = Backbone.View.extend({

		id: "binList",

		events: {
			"click .remove": "remove"
		},

		initialize: function(options){

			this.binCollection = new ItemCollection({
				model: options.model,
				itemTemplate: binItemTemplate,
				items: options.data
			 });
		},

		addItem: function (model){
			return this.binCollection.addItem(model);
		},
		
		renderItem: function(itemView) {
			this.binCollection.renderItem(itemView);
		},

		remove: function(event){
			this.trigger("remove", this, event)
		},
		
		toggle: function() {
			this.$el.toggle("slow");
		},

		getItemsLength: function(){
			return this.binCollection.itemsCollectionView.length;
		},

		render: function(){
			this.$el.append(this.binCollection.render().$el);
			
			return this;
		}
    });
	
    return BinList;
});