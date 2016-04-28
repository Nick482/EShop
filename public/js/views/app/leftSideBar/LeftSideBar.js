define(['backbone',
        'text!/templates/main/leftSideBarTemplate.html',
        'views/app/leftSideBar/logo',
        'views/common/collection/collection',
        'text!/templates/main/categoriesTemplate.html',
        'collections/CategoryCollection'],
    function(Backbone, leftSideBarTemplate, Logo, Categories, categoriesTemplate, CategoryCollection){
        return Backbone.View.extend({

            el: leftSideBarTemplate,

            initialize: function(){
                var self = this;
                this.collection = new CategoryCollection();
                this.collection.fetch({success: function(collection){
                    self.categories = new Categories({collection: collection, template: categoriesTemplate});
                    self.render();
                }});
                this.logo = new Logo();
            },

            render: function(){
                this.$el.append(this.logo.$el);
                this.$el.append(this.categories.$el);

                return this;
            }
        })

    }
);