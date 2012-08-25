define('Router',
[
'3rdparty/GoogleAnalyticsRouter'
],
function
(
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
