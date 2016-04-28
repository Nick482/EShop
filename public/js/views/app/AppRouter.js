define(['backbone',
        'views/app/MainPage',
        'views/app/content/content',
        'models/ProductModel',
        'collections/ProductCollection'
], function(Backbone, MainPage, Content, ProductModel, ProductCollection){
    return Backbone.Router.extend({
        routes: {
        '': 'onMain',
        'product/:id': "onProductSelect",
        ':id': 'onCategorySelect'
        },

        checkMain: function(){
            if(!this.mainPage){
                this.mainPage = new MainPage();
            }
        },

        clearMain: function(){
            if(this.mainPage)this.mainPage.remove();
            if(this.content)this.content.remove();
        },

        checkContent: function(){
            if(!this.content){
                this.content = new Content();
            }
        },

        onMain: function(){
            this.clearMain();
            var self = this;
            this.mainPage = new MainPage();
            this.content = new Content();
            this.products = new ProductCollection();

            this.products.fetch({
                data: {page: 1},
                success: function(products){
                    self.content.viewCategory(products);
                }
            });
        },

        onCategorySelect: function(id){
            var self = this;
            this.checkMain();
            this.checkContent();
            this.products = new ProductCollection();
            this.products.fetch({
                data: {page: 1, category: id},
                success: function(products){
                    self.content.viewCategory(products);
                }
            });
        },

        onProductSelect: function(id){
            var self = this;
            this.checkMain();
            this.checkContent();
            this.product = new ProductModel();
            this.product.set('_id', id);
            this.product.fetch({success: function(product){
                self.content.viewProduct(product);
                self.content.on('cartAddition', self.mainPage.cartRefresh, self.mainPage);
            }});
        }
    });
});