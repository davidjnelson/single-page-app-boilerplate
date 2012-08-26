define('Router',
[
'3rdparty/GoogleAnalyticsRouter',
'views/HelloWorldView'
],
function
(
GoogleAnalyticsRouter,
HelloWorldView
) {
    'use strict';

    return GoogleAnalyticsRouter.extend({
        initialize: function() {
            GoogleAnalyticsRouter.prototype.initialize.call(this);
            this.helloWorldView = new HelloWorldView();
        },
        routes: {
            '': 'defaultRoute'
        },
        defaultRoute: function() {
            this.helloWorldView.render();
        }
    });
});
