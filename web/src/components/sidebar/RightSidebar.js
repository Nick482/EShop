define(function(require){
	
	var Backbone = require('backbone'),
		ItemModel = require('components/main/model/itemModel'),
		Bin = require('components/bin/Bin'),
		BinList = require('components/bin/BinList'),
		LoginView = require('components/login/LoginView'),
		
		binItemTemplate = require('text!components/bin/template/binItemTemplate.htm');
	
	return Backbone.View.extend({
		className: "rightSideBar",
		
		initialize: function() {
			
			this.loginView = new LoginView();
			this.bin = new Bin();
			this.binList = new BinList({
				model: ItemModel,
            	itemTemplate: binItemTemplate,
            	items: []
			});
			
			this.initEvents();
		},
		
		initEvents: function() {
			var self = this;
			
			this.listenTo(this.bin, "click:bin", function() {
				self.binList.toggle();
			});
		},
		
		addBinItem: function(model) {
			var itemView = this.binList.addItem(model);
			this.binList.renderItem(itemView);
			this.bin.update({length: this.binList.getItemsLength()});
		},
		
		render: function() {
			this.$el.append(this.loginView.render().$el);
			this.$el.append(this.bin.render().$el);
			this.$el.append(this.binList.render().$el);
			
			return this;
		},
		
		remove: function() {
			this.loginView.remove();
			this.bin.remove();
			this.binList.remove();
			
			Backbone.View.prototype.remove.apply(this, arguments);
		}
	});


});