define('Router',
[
'jquery',
'backbone',
'Constants',
'3rdparty/GoogleAnalyticsRouter'
],
function
(
$,
Backbone,
Constants,
GoogleAnalyticsRouter
) {
    'use strict';

    return GoogleAnalyticsRouter.extend({
        initialize: function() {
            GoogleAnalyticsRouter.prototype.initialize.call(this);
        },
        routes: {
            '': 'default'
        },
        default: function() {
            console.log('hello');
        }
    });
});
