define(['backbone', 'jquery', 'text!/templates/admin/sections/categoryControlTemplate.html', 'collections/CategoryCollection',
        'views/common/collectionItem/collectionItem', 'text!/templates/admin/sections/categoryTemplate.html',
        'models/CategoryModel', 'views/common/itemAddition/itemAddition',
        'text!/templates/admin/additionTemplates/addCategoryTemplate.html', 'views/common/search/search'],
    function(Backbone, $, categoryControlTemplate, CategoryCollection, CollectionItem,
             categoryTemplate, CategoryModel, ItemAddition, addCategoryTemplate, Search){
        return Backbone.View.extend({

            el: categoryControlTemplate,

            events: {
                'click #editButton': '_edit',
                'click #deleteButton': '_deleteCategory'
            },

            initialize: function(){
                var self = this;

                this.itemAddition = new ItemAddition(CategoryModel, addCategoryTemplate);
                this.categoryCollection = new CategoryCollection();
                this.categoryCollection.fetch({success: function(){self.render(); self.initEvents()}});
                this.search = new Search();
            },

            _edit: function(event){
                var categoryName = $(event.target).parent().data('attr');
                console.log(categoryName);
            },

            _deleteCategory: function(event){
                var self = this;
                var categoryID = $(event.target).parent().data('attr');
                this.categoryCollection.findWhere({_id: categoryID}).destroy({
                    success: function(model){
                        self.$el.find('#'+ model.get('name')).remove();
                    }
                });
            },

            initEvents: function() {
                var self = this;
                this.itemAddition.on('itemAdded', function(category) {
                    self.categoryCollection.add(category);
                    var categoryView = new CollectionItem(category, categoryTemplate);
                    self.$el.append(categoryView.$el)
                });
                this.listenTo(this.search, 'search', function(searchString){
                    $.get('/category/?name=' + searchString, function(data){
                        self.categoryCollection.reset(data);
                        self.$el.find('tr').remove();
                        self.categoryCollection.each(function(category){
                            var categoryView = new CollectionItem(category, categoryTemplate);
                            self.$el.append(categoryView.$el);
                        });
                    })
                })
            },

            render: function(){
                var self = this;

                this.$el.append(this.itemAddition.$el);
                this.$el.append(this.search.$el);
                this.categoryCollection.each(function(category){
                    var categoryView = new CollectionItem(category, categoryTemplate);
                    self.$el.append(categoryView.$el);
                });

                return this;
            }
        })
    }
);