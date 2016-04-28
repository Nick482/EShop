define(['backbone', 'text!/templates/admin/sections/customerControlTemplate.html', 'collections/CustomerCollection',
'views/common/collectionItem/collectionItem', 'text!/templates/admin/sections/customerTemplate.html'],
    function(Backbone, customerControlTemplate, CustomerCollection, CollectionItem, customerTemplate){
        return Backbone.View.extend({

            el: customerControlTemplate,

            events: {
                'click #banButton': '_banCustomer'
            },

            initialize: function(){
                var self = this;
                this.customerCollection = new CustomerCollection();
                this.customerCollection.fetch({success: function(){self.render()}});
            },

            _banCustomer: function(event){
                var customerLogin = $(event.target).parent().data('attr');
                this.trigger('banCustomer', {login: customerLogin});
            },

            render: function(){
                var self = this;
                this.customerCollection.each(function(customer){
                    var customerView = new CollectionItem(customer, customerTemplate);
                    self.$el.append(customerView.$el);
                });

                return this;
            }
        })
    }
);