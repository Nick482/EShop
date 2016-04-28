define(['backbone', 'underscore', 'jquery', 'text!/templates/main/content.html',
        'views/common/collection/collection', 'text!/templates/main/gridProductTemplate.html',
        'text!/templates/main/productTemplate.html', 'text!/templates/main/commentsTemplate.html'
],
    function(Backbone, _, $, contentTemplate, Collection, gridProductTemplate, productTemplate, commentsTemplate){
        return Backbone.View.extend({

            el:contentTemplate,

            events: {
                'click #addComment': '_addComment',
                'click #confirmComment': '_confirmComment',
                'click #addToCart': '_addToCart'
            },

            initialize: function(){

                this.render();
            },

            viewCategory: function(collection){
                this.$el.empty();
                this.products = new Collection({collection: collection, template: gridProductTemplate});
                this.$el.append(this.products.$el);
            },

            viewProduct: function(product){
                this.$el.empty();
                this.product = new Collection({collection: product, template: productTemplate});
                this.comments = new Collection({collection: product.get('comments'), template: commentsTemplate});
                this.product.$el.append(this.comments.$el);
                this.$el.append(this.product.$el);
            },

            _addToCart: function(event){
                var $itemID = $(event.target).data('attr');
                this.trigger('cartAddition', $itemID, this.product.collection);
            },

            _addComment: function(event){
                $('#commentCreation').toggleClass('hidden');
            },

            _confirmComment: function(event){

            },

            render: function(){
                $('.container').append(this.$el);
                return this;
            }
        });
    }
);