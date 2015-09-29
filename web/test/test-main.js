/**
 * Created by Nick on 9/26/2015.
 */

var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',

    paths: {
        jquery: 'lib/jquery/dist/jquery',
        underscore: 'lib/underscore/underscore',

        // requirejs related
        css: 'lib/require-css/css',
        text: 'lib/requirejs-text/text',

        // backbone related
        'backbone': 'lib/backbone/backbone'
    },
    shim: {},

    // dynamically load all test files
    //deps: allTestFiles,
    //
    deps: tests,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});