define(['backbone', 'jquery', 'underscore', 'text!/templates/main/cartTemplate.html',
        'views/common/collectionItem/collectionItem', 'models/OrderModel', 'text!/templates/main/cartProductTemplate.html'],
    function(Backbone, $, _, cartTemplate, CollectionItem, OrderModel, cartProductTemplate){
        return Backbone.View.extend({
            el: cartTemplate,

            events: {
                'click #removeProduct' : '_removeProductFromCart',
                'click #checkOut': '_checkOut'
            },

            initialize: function(){
                this.cartList = (JSON.parse(localStorage.getItem('cart')));

                this.render();
            },

            _removeProductFromCart: function(event){
                var productID = $(event.target).data('attr');
                this.$el.find('#' + productID).remove();
                this.cartList = this.cartList.filter(function(product){

                    return product._id !== productID;
                });
                localStorage.setItem('cart', JSON.stringify(this.cartList));
            },

            _checkOut: function(event){
                this.order = new OrderModel();
                var productIDs = this.cartList.map(function(product){
                    return product._id;
                });

                this.order.set('items', productIDs);
                this.order.save();

                console.log(this.order);
            },

            render: function(){
                var $modalBody = this.$el.find('.modal-body');
                var i = 0;

                for(i = this.cartList.length; i--;){

                    this.collectionItem = new CollectionItem(this.cartList[i], cartProductTemplate);
                    $modalBody.append(this.collectionItem.$el);
                }

                return this;
            }
        });
    });