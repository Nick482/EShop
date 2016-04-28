define(['backbone', 'underscore', 'jquery'
],
    function(Backbone, _, $){
        return Backbone.View.extend({

            el: function() {
                return _.template(this.template)(
                    collection = this.collection.models || this.collection
                );
            },

            constructor: function(options){
                this.collection = options.collection;
                this.template = options.template;

                this.initialize();
            },

            initialize: function(){
                this.setElement(this.el());

                this.render();
            },

            render: function(){

                return this;
            }
        })
    }
);