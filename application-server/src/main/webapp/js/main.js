// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '3rdparty/jquery-1.8.0',
        underscore: '3rdparty/underscore-1.3.3',
        backbone: '3rdparty/backbone-0.9.2',
        text: '3rdparty/requirejs/text-2.0.1',
        modernizr: 'js/3rdparty/modernizr-2.6.1.js'
    }
});

require([
    'GoogleAnalyticsLoader',
    'Router'
], function(GoogleAnalyticsLoader, Router) {
    'use strict';

    GoogleAnalyticsLoader.load();
    new Router().start();
});
