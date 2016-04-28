define(['backbone', 'jquery', 'underscore', 'js-cookie',
        'text!/templates/main/mainTemplate.html',
        'views/app/leftSideBar/LeftSideBar',
        'views/common/logIn/logIn',
        'views/common/logOut/logOut',
        'views/common/signUp/signUp',
        'views/common/cart/cart'],
    function(Backbone, $, _, Cookie, mainTemplate, LeftSideBar,
             LogIn, LogOut, SignUp, Cart){
        return Backbone.View.extend({

            el: mainTemplate,

            initialize: function(){
                this.leftSideBar = new LeftSideBar();
                this.logIn = new LogIn();
                this.signUp = new SignUp();
                this.logOut = new LogOut();
                this.cart = new Cart();
                this.sess = Cookie.get('session');

                this.render();
            },

            cartRefresh: function(itemID, item){
                var cartList = JSON.parse(localStorage.getItem('cart')) || [];
                cartList.push(item.toJSON());
//                console.log(cartList);
//                console.log(JSON.stringify(cartList));
                localStorage.setItem('cart', JSON.stringify(cartList));
                this.cart.remove();
                this.cart = new Cart();
                this.$el.append(this.cart.$el);
            },

            render: function(){
                this.$el.append(this.leftSideBar.$el);
                if(!this.sess) {
                    this.$el.append(this.logIn.$el);
                    this.$el.append(this.signUp.$el);
                } else {
                    this.$el.append(this.logOut.$el);
                }
                this.$el.append(this.cart.$el);

                $('body').append(this.$el);
            }
        })
    }
);
