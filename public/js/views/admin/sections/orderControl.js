define(['backbone', 'text!/templates/admin/sections/orderControlTemplate.html', 'collections/OrderCollection',
        'views/common/collectionItem/collectionItem', 'text!/templates/admin/sections/orderTemplate.html'],
    function(Backbone, orderControlTemplate, OrderCollection, CollectionItem, orderTemplate){
        return Backbone.View.extend({

            el: orderControlTemplate,

            events: {
                'click #doneButton': '_done',
                'click #cancelButton': '_cancel'
            },

            initialize: function(){
                var self = this;
                this.orderCollection = new OrderCollection();
                this.orderCollection.fetch({success: function(){self.render()}});
            },

            _done: function(event){
                //cancel
            },

            render: function(){
                var self = this;
                this.orderCollection.each(function(order){
                    var orderView = new CollectionItem(order, orderTemplate);
                    self.$el.append(orderView.$el);
                });

                return this;
            }
        })
    }
);