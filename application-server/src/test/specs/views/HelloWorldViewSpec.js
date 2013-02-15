define(
[
    'jquery',
    'Router'
],
function
(
    $,
    Router
) {
    'use strict';

    describe('HelloWorldView', function() {
       afterEach(function() {
           $('#helloWorldDiv').remove();
       })

       it('should display the text Hello World in the div with id: "helloWorldDiv"', function() {
           new Router().start();

           var helloWorldText = $('#helloWorldDiv').text();

           expect(helloWorldText).toEqual('Hello World');
       });
    });
});
