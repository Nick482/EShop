var app = require('./app');
var debug = require('debug')('shop:server');
var http = require('http');
var cluster = require('cluster');
var CPUs = require('os').cpus().length;
var socketio = require('socket.io');
var i;
var port = 3000;

app.set('port', port);

//if (cluster.isMaster) {
//    for(i = 0; i <  CPUs; i++ ) {
//        cluster.fork();
//    }
//    cluster.on('listening', function(worker, address) {
//        console.log('Worker started with PID ' + worker.process.pid + '.');
//    });
//    cluster.on('exit', function(worker){
//        console.log('worker %d died', worker.id);
//        cluster.fork();
//    })
//} else {
    var server = http.createServer(app);
    server.listen(port);

    var sockets = socketio(server);
//}