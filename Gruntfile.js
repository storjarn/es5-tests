module.exports = function (grunt) {

    var serverOptions = { // Options for server
        dev: {
            root: './source',
            host: '0.0.0.0',
            port: 4567
        },
        test: {
            root: './',
            host: '0.0.0.0',
            port: 8888
        }
    };

    grunt.config.set('serverOptions', serverOptions);

    grunt.registerTask('default', 'Starts the test server.', function() {
        var done = this.async();
        var httpServer = require('http-server/lib/http-server');
        var server = httpServer.createServer({root: serverOptions.test.root});
        var log = console.log;
        var host = serverOptions.test.host;
        var port = serverOptions.test.port;

        server.listen(port, host, function() {
            var uri = ['http', '://', host, ':', port].join('');
            log('Starting up the test server, serving '.yellow + server.root.cyan + ' on: '.yellow + uri.cyan);
            log('Hit CTRL-C to stop the server');
            // done();
        });
    });

};
