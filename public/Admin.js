require.config({
    baseUrl: '/js',
    paths: {
        underscore: 'libs/underscore/underscore',
        jquery: 'libs/jquery/dist/jquery',
        text: 'libs/text/text',
        backbone: 'libs/backbone/backbone',
        'js-cookie': 'libs/js-cookie/src/js.cookie'
    }
});

require(["js/views/admin/Admin.js"], function (Admin) {
    var admin = new Admin();
});