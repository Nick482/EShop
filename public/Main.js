require.config({
    baseUrl: '/js',
    paths: {
        underscore: 'libs/underscore/underscore',
        jquery: 'libs/jquery/dist/jquery',
        text: 'libs/text/text',
        socketio: '../socket.io/socket.io',
        backbone: 'libs/backbone/backbone',
        'js-cookie': 'libs/js-cookie/src/js.cookie'
    }
});

require(["js/views/app/App.js", 'socketio'], function (app, socket) {
    var io = socket();

    app.initialize();
});