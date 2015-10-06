/**
 * Created by Nick on 7/18/2015.
 */
define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        addTemplate = require('text!components/add/template/addTemplate.htm'),
        ItemModel = require('components/main/model/ItemModel'),
		routesEnum = require('components/enum/routesEnum');

    var Add = Backbone.View.extend({
        el: addTemplate,

        events: {
            "keyup input" : "change",
            "change input" : "change",
            "click #upload" : "upload"
        },

        initialize: function(){
			this.model = new ItemModel();
            this.render();
			
			this.$inputs = this.$el.find('input');
			this.$message = this.$el.find('p.message');
        },
		
        change: function(evt) {
            var changed = evt.currentTarget,
            	value = $(evt.currentTarget).val();
			
            this.model.set(changed.id, value);
        },
		
        upload: function(){
            var self = this;
			
            $.post(routesEnum.ADMIN_ADD_NEW_PRODUCT, this.model.toJSON()).statusCode({
                223: function(data) {
					
                    self.$message.removeAttr('hidden').text(data).css("color", "blue");
					self.$message.hide(3000);
					
                    self.$inputs.val('');
					
                    self.model.clear().set(self.model.defaults);
					
                },
				
                224: function(data){
                    self.$message.removeAttr('hidden').text(data).css("color", "red");
                    self.$message.hide(3000);
                }
				
            })
        },
		
        render: function(){
        	$('body').append(this.$el);
        }
		
    });
	
    return Add;
});