define(function(require){

	var Backbone = require('backbone'),
		
		ItemCollection = require('components/itemCollection/ItemCollection'),
        itemTemplate = require('text!components/main/template/itemTemplate.htm'),
        ItemModel = require('components/main/model/ItemModel'),
		
		Menu = require('components/menu/MainMenu'),
		MenuCover = require('components/menu/MenuCover'),
		SelectedItemView = require('components/selected/SelectedItemView');
		
	return Backbone.View.extend({
	
		className: "contentView",
		
		initialize: function(){
			this.menu = new Menu();
			this.menuCover = new MenuCover();
			this.selectedItemView = new SelectedItemView();
			
			this.itemCollection = new ItemCollection({
				model: ItemModel,
				itemTemplate: itemTemplate,
				itemAdditionalCssClass: "gridItem"
			});
			
			this.initEvents();
		},
		
		initEvents: function() {
			var self = this;
			
			this.listenTo(self.selectedItemView, "backToSearch", function(){
				self.selectedItemView.toggle();
				self.itemCollection.$el.animate({width: 'toggle'}, 1000);
			});
			
			this.listenTo(this.itemCollection, "item:selected", function(itemView, model){
				console.log(arguments);
				self.selectedItemView.hide();
				self.itemCollection.$el.animate({width: 'toggle'}, 1000);
				self.selectedItemView.setModelData(model.toJSON());
				self.selectedItemView.hide();
				self.selectedItemView.toggle();
			});
		},
		
		resetData: function(data){
			this.itemCollection.resetCollection(data);
			this.itemCollection.render().$el.show();
		},
		
		render: function(){
			this.$el.append(this.menu.render().$el);
			this.$el.append(this.menuCover.render().$el);
			this.$el.append(this.selectedItemView.render().$el);
			this.$el.append(this.itemCollection.render().$el);
			
			return this;
		},
		
		remove: function(){
			this.menu.remove();
			this.menuCover.remove();
			this.selectedItemView.remove();
			
			Backbone.View.prototype.remove.apply(this, arguments);
		}
	
	});

});