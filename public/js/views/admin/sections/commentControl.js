define(['backbone', 'text!/templates/admin/sections/commentControlTemplate.html', 'collections/CommentCollection',
        'views/common/collectionItem/collectionItem', 'text!/templates/admin/sections/commentTemplate.html'],
    function(Backbone, commentControlTemplate, CommentCollection, CollectionItem, commentTemplate){
        return Backbone.View.extend({

            el: commentControlTemplate,

            events: {
                'click #delete': '_deleteComment'
            },

            initialize: function(){
                var self = this;
                this.commentCollection = new CommentCollection();
                this.commentCollection.fetch({success: function(){self.render()}});
            },

            _deleteComment: function(event){
                var commentLogin = $(event.target).parent().data('attr');
                this.trigger('banUser', {_id: commentID});
            },

            render: function(){
                var self = this;
                this.commentCollection.each(function(comment){
                    var commentView = new CollectionItem(comment, commentTemplate);
                    self.$el.append(commentView.$el);
                });

                return this;
            }
        })
    }
);