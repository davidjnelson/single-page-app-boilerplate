require.config({
    paths: {
        // alias versioned dependencies to simplify updating as new versions are released
        jquery: '3rdparty/jquery-1.8.0',
        underscore: '3rdparty/underscore-1.3.3',
        backbone: '3rdparty/backbone-0.9.2',
        text: '3rdparty/requirejs/text-2.0.1',
        modernizr: '3rdparty/modernizr-2.6.1.js'
    }
});

require(
[
'Router'
],
function
(
Router
) {
    'use strict';

    new Router().start();
});
