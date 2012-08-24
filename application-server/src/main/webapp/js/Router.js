define('Router', [
    'jquery',
    'backbone'
], function($, Backbone) {
    'use strict';

    return Backbone.Router.extend({
        routes:{
            '':  'defaultRoute'
        },
        defaultRoute: function() {
        },
        start: function() {
            // IE requires the dom to be ready before calling start since it uses an iframe.
            if($.browser.msie) {
                $(function() {
                    Backbone.history.start();
                });
            } else {
                Backbone.history.start();
            }
        }
    });
});