define(['backbone', 'text!/templates/admin/sections/productControlTemplate.html',
        'collections/ProductCollection', 'views/common/collectionItem/collectionItem',
        'text!/templates/admin/sections/productTemplate.html', 'models/ProductModel',
        'views/common/itemAddition/itemAddition', 'text!/templates/admin/additionTemplates/addProductTemplate.html',
        'views/common/search/search'],
    function(Backbone, productControlTemplate, ProductCollection,
             CollectionItem, productTemplate, ProductModel, ItemAddition, addProductTemplate, Search){
        return Backbone.View.extend({

            el: productControlTemplate,

            events: {
                'click #editButton': '_editProduct',
                'click #deleteButton': '_deleteProduct'
            },

            initialize: function(){
                var self = this;

                this.addProductTemplate = addProductTemplate;
                this.itemAddition = new ItemAddition(ProductModel, this.addProductTemplate);
                this.productCollection = new ProductCollection();
                this.productCollection.fetch({success: function(){self.render(); self.initEvents()}});
                this.search = new Search();
            },

            _editProduct: function(event){
                console.log('edited');
            },

            _deleteProduct: function(event){
                var self = this;
                var productID = $(event.target).parent().data('attr');
                $.ajax({
                    url: '/product/' + productID,
                    type: 'DELETE',
                    success: function (data) {
                        self.productCollection.fetch({success:function(){
                            self.$el.empty();
                            self.render();
                        }});
                    }
                })
            },

            initEvents: function() {
                var self = this;
                this.listenTo(this.search, 'search', function(searchString){
                    $.get('/product/?name=' + searchString, function(data){
                        self.productCollection.reset(data);
                        self.$el.find('tr').remove();
                        self.productCollection.each(function(product){
                            var productView = new CollectionItem(product, productTemplate);
                            self.$el.append(productView.$el);
                        });
                    })
                })
            },

            render: function(){
                var self = this;

                this.$el.append(this.itemAddition.$el);
                this.$el.append(this.search.$el);
                this.productCollection.each(function(product){
                    var productView = new CollectionItem(product, productTemplate);
                    self.$el.append(productView.$el);
                });

                return this;
            }
        })
    }
);
