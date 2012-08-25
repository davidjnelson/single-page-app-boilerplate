define('views/HelloWorldView',
[
'backbone',
'hbs!template/HelloWorldTemplate'
],
function
(
Backbone,
HelloWorldTemplate
) {
    'use strict';

    return Backbone.View.extend({
        el: 'body',
        render: function() {
            $(this.el).append(HelloWorldTemplate({ greeting: 'Hello World'}));
            return this;
        }
    });
});
