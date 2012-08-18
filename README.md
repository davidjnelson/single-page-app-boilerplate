Single Page App Boilerplate
===========================

Single Page App Boilerplate allows you to create single page apps quickly using standard best practices such as 
test driven development, javascript dependency management, continuous integration, and continuous deployment.

Out of the box it sets up the requirejs dependency management system, so you don't have to cram all your code into large, unreadable files, or use globally scoped namespaces tied to a specific loading order for your code.

With one command, your css and javascript files will be concatenated and minified in the correct order using the requirejs r.js optimizer, the google closure compiler, and the requirejs-maven-plugin.

Run jasmine with one command via the jasmine-maven-plugin.  Write unit tests in jasmine, and see them pass or fail in the jasmine runner running in your favorite browser.  Debug them with your browser development tools as needed.

With one command, run all your jasmine tests against a js-test-driver server to see how they work in all target browsers, such as ie-6-windows, ie-7-windows, ie-8-windows, ie-9-windows, chrome-windows, safari-windows, firefox-windows, chrome-osx, safari-osx, firefox-osx.  Your jasmine tests run without modification in js-test-driver through the usage of the jasmine-jstd-adapter.

With one command, deploy your code to amazon web service's elastic beanstalk for java using either fast deployment, or the slightly slower rolling deployment which prevents service interruption using ther beanstalk-maven-plugin.  Once your app is up on elastic beanstalk, it is ideal and easy to use amazon web service's route53 dns service to map a custom domain to the cname for a cloudfront origin, using your elastic beanstalk load balancer as a custom origin.  This way, all your requests for static content are delivered via the cloudfront content delivery network for enhanced performance.  The single command deployment process automatically versions your concatenated and minified css and javascript file that represents your application, and updates the index.html page to point to it.  You can also easily roll back a deployment with a few clicks from the amazon web service's elastic beanstalk console.

Single Page App Boilerplate makes it easy to specify the minimum and maximum number of servers you want in your load balanced server farm, as well as the size of the servers you want to use.  Sim use the amazon web service's admin console to change settings.

Continuous integration is a snap regardless of the continuous integration server you use.  Js-test-driver tests are automatically run as part of the test lifecycle, and fail the build if any fail.

In addition, Single Page App Boilerplate leverages HTML5 Boilerplate so you get all the awesome benefits of that project automatically.

By default, backbone, handlebars, and jquery are the MVC, templating, and DOM libraries used.  This can easily be changed to suit your needs.

If you need to write server side code for your app, such as to talk to your own database or to proxy through to an external REST service, you can just write standard java servlets which will be automatically deployed to elastic beanstalk.

Single Page App Boilerplate runs on all platforms that java runs on as it is based on maven.