define('views/HelloWorldView',
[
'backbone'
],
function
(
Backbone
) {
    'use strict';

    return Backbone.View.extend({
        render: function() {
            $('body').append('<div id="helloWorldDiv">Hello World</div>');
        }
    });
});
