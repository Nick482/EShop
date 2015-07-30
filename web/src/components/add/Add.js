/**
 * Created by Nick on 7/18/2015.
 */
define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        addTemplate = require('text!components/add/template/addTemplate.htm'),
        ItemModel = require('components/main/model/itemModel');

    var Add = Backbone.View.extend({
        el: addTemplate,

        events: {
            "keyup input" : "change",
            "change input" : "change",
            "click #upload" : "upload"
        },

        initialize: function(){
            this.render();
        this.model = new ItemModel();
        },
        change: function(evt) {
            var changed = evt.currentTarget;
            var value = $(evt.currentTarget).val();
            this.model.set(changed.id, value);
        },
        upload: function(){
            var self = this;
            var message = $('p.message');
            var url = "http://localhost:3000/add";
            $.post(url, this.model.toJSON()).statusCode({
                223: function(data) {
                    message.removeAttr('hidden').text(data).css("color", "blue");
                    setTimeout(function(){message.prop('hidden', true)}, 3000);
                    $('input').val('');
                    self.model.clear().set(self.model.defaults);
                },
                224: function(data){
                    message.removeAttr('hidden').text(data).css("color", "red");
                    setTimeout(function(){message.prop('hidden', true)}, 3000);
                    }
            })
        },
        render: function(){
        $('body').append(this.$el)
        }
    });
    return Add;
});