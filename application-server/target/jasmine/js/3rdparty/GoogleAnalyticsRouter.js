define('3rdparty/GoogleAnalyticsRouter',
[
'jquery',
'backbone',
'Constants'
],
function
(
$,
Backbone,
Constants
) {
    'use strict';
    return Backbone.Router.extend({
        initialize: function() {
            this._loadGoogleAnalytics();
            this._overrideLoadUrl();
        },
        start: function() {
            // IE requires the dom to be ready before calling start since it uses an iframe.
            if($.browser.msie) {
                $(function() {
                    Backbone.history.start();
                });
            } else {
                // don't use pushstate until we support generating static content from view templates
                Backbone.history.start();
            }
        },
        _overrideLoadUrl: function() {

            // Created by Kendall Buchanan, (https://github.com/kendagriff)
            // Modified by Paul English, (https://github.com/nrub)
            // Modified by David Nelson, (https://github.com/davidjnelson)
            // MIT licence
            // Version 0.0.2

            Backbone.History.prototype.loadUrl = function(fragmentOverride) {
                var fragment = this.fragment = this.getFragment(fragmentOverride);
                var matched = _.any(this.handlers, function(handler) {
                    if (handler.route.test(fragment)) {
                        handler.callback(fragment);
                        return true;
                    }
                });

                // tack on a forward slash to the beginning of the path unless we are at the root
                if (!/^\//.test(fragment)) {
                    fragment = '/' + fragment;
                }

                if (window._gaq !== undefined) {
                    window._gaq.push(['_trackPageview', fragment]);
                }

                return matched;
            };
        },
        _loadGoogleAnalytics: function() {
            var googleAnalyticsAccount = Constants.GOOGLE_ANALYTICS_ACCOUNT;

            if(googleAnalyticsAccount !== '') {
                (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
                    s.parentNode.insertBefore(g,s)}(document,'script'));
            }
        }
    });
});