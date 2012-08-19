Single Page App Boilerplate
===========================

Single Page App Boilerplate allows you to create [single page apps](http://en.wikipedia.org/wiki/Single-page_application) quickly using standard best practices such as [behavior driven development]() with 
[test driven development](http://en.wikipedia.org/wiki/Test-driven_development), [javascript dependency management](http://requirejs.org/), [continuous integration](http://en.wikipedia.org/wiki/Continuous_integration), and, if you really have it together, [continuous deployment](http://www.startuplessonslearned.com/2009/06/why-continuous-deployment.html).

Out of the box it sets up the [requirejs](http://requirejs.org/) dependency management system, so you don't have to cram all your code into large, unreadable files, or use globally scoped namespaces tied to a specific loading order for your code.

With one command, your css and javascript files will be concatenated and minified in the correct order using the [requirejs r.js optimizer](http://requirejs.org/docs/optimization.html), the [google closure compiler](https://developers.google.com/closure/compiler/), and the [requirejs-maven-plugin](https://github.com/mcheely/requirejs-maven-plugin).

Run [jasmine](http://pivotal.github.com/jasmine/) with one command via the [jasmine-maven-plugin](https://github.com/searls/jasmine-maven-plugin).  Write unit tests in [jasmine](http://pivotal.github.com/jasmine/), and see them pass or fail in the [jasmine](http://pivotal.github.com/jasmine/) runner running in your favorite browser.  Debug them with your browser development tools as needed.

Single Page App Boilerplate comes with a patched version of the [jasmine-maven-plugin](https://github.com/searls/jasmine-maven-plugin) which makes [requirejs](http://requirejs.org/) and [jasmine](http://pivotal.github.com/jasmine/) based tests work from within [js-test-driver](http://code.google.com/p/js-test-driver/).

With one command, run all your [jasmine](http://pivotal.github.com/jasmine/) tests against a [js-test-driver](http://code.google.com/p/js-test-driver/) server using [jstd-maven-plugin](http://code.google.com/p/jstd-maven-plugin/) to see how they work in all target browsers, such as ie-6-windows, ie-7-windows, ie-8-windows, ie-9-windows, chrome-windows, safari-windows, firefox-windows, chrome-osx, safari-osx, firefox-osx.  Your [jasmine](http://pivotal.github.com/jasmine/) tests run without modification in [js-test-driver](http://code.google.com/p/js-test-driver/) through the usage of the [jasmine-jstd-adapter](https://github.com/ibolmo/jasmine-jstd-adapter).

Single Page App Boilerplate comes with a patched version of the [jstd-maven-plugin](http://code.google.com/p/jstd-maven-plugin/) which supports recursive directory globbing.  [js-test-driver](http://code.google.com/p/js-test-driver/) will [likely include this patch in their next release](http://code.google.com/p/js-test-driver/issues/detail?id=6).  This allows you to not need to update any config files whenever you add/rename/delete javascript files.

With one command, deploy your code to amazon web service's [elastic beanstalk](http://aws.amazon.com/elasticbeanstalk/) for java using either fast deployment, or the slightly slower rolling deployment which prevents service interruption using the [beanstalk-maven-plugin](http://beanstalker.ingenieux.com.br/beanstalk-maven-plugin/).  Once your app is up on [elastic beanstalk](http://aws.amazon.com/elasticbeanstalk/), it is ideal and easy to use amazon web service's [route53](http://aws.amazon.com/route53/) dns service to map a custom domain to the cname for an amazon web service's [cloudfront](http://aws.amazon.com/cloudfront/) origin, using your [elastic beanstalk](http://aws.amazon.com/elasticbeanstalk/) load balancer as the custom origin.  

This way, all your requests for static content are delivered via the [cloudfront](http://aws.amazon.com/cloudfront/) content delivery network for enhanced performance.  The single command deployment process automatically versions your concatenated and minified css and javascript file that represents your application, and updates the index.html page to point to it.  You can also easily roll back a deployment with a few clicks from the amazon web service's [elastic beanstalk](http://aws.amazon.com/elasticbeanstalk/) web ui console.

Single Page App Boilerplate makes it easy to specify the minimum and maximum number of servers you want in your load balanced server farm, as well as the size of the servers you want to use.  Simply use amazon web service's [elastic beanstalk](http://aws.amazon.com/elasticbeanstalk/) web ui console to change settings.

[Continuous integration](http://en.wikipedia.org/wiki/Continuous_integration) is a snap regardless of the [continuous integration](http://en.wikipedia.org/wiki/Continuous_integration) server you use.  [js-test-driver](http://code.google.com/p/js-test-driver/) tests are automatically run as part of the [maven](http://maven.apache.org/) test lifecycle, and fail the build if any fail.

In addition, Single Page App Boilerplate leverages [HTML5 Boilerplate](http://html5boilerplate.com/) so you get all the awesome benefits of that project automatically.

By default, backbone, handlebars, and jquery are the MVC, templating, and DOM libraries used.  This can easily be changed to suit your needs.

If you need to write server side code for your app, such as to talk to your own database or to proxy through to an external REST service, you can just write standard java servlets which will be automatically deployed to [elastic beanstalk](http://aws.amazon.com/elasticbeanstalk/).

Single Page App Boilerplate runs on all platforms that java runs on as it is based on [maven](http://maven.apache.org/), and is licensed under the MIT license.

Quickstart
==========

