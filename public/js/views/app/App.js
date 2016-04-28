define(['backbone',
        'jquery',
        'js-cookie',
        './AppRouter.js'],
    function(Backbone, $, Cookie, AppRouter) {
        function init(){
            var appRouter = new AppRouter();

            Backbone.history.start({silent: true});
            Backbone.history.loadUrl(Backbone.history.fragment);
        }
        return {
            initialize: init
    };
});