define(['backbone', 'text!/templates/admin/controlSectionTemplate.html',
        './sections/customerControl.js', './sections/productControl.js',
        './sections/orderControl.js', './sections/categoryControl.js',
        './sections/commentControl.js'],
    function(Backbone, controlSectionTemplate, CustomerControl,
             ProductControl, OrderControl, CategoryControl, CommentControl){
        return Backbone.View.extend({

            el: controlSectionTemplate,

            initialize: function(){
                this.customerControl = new CustomerControl();
                this.productControl = new ProductControl();
                this.orderControl = new OrderControl();
                this.categoryControl = new CategoryControl();
                this.commentControl = new CommentControl();

                this.render();
            },

            render: function(){
                this.$el.append(this.customerControl.$el);
                this.$el.append(this.productControl.$el);
                this.$el.append(this.orderControl.$el);
                this.$el.append(this.categoryControl.$el);
                this.$el.append(this.commentControl.$el);

                return this;
            }
        })
    }
);