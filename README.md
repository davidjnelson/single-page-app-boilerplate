Single Page App Boilerplate
===========================

Single Page App Boilerplate allows you to easily and quickly create single page apps using best practices such as test driven development, javascript dependency management, and continuous integration.

Goals
-----

* Make test driven development in javascript easy
* Make continuous integration of web user interfaces easy
* Provide a solid foundation wiring together popular front end libraries in an easy to use way
* Make it easy to deploy and rollback versioned web user interface code and images to a content delivery network

Features
--------

* Based on html5 boilerplate
* Backbone, jquery, underscore, handlebars, requirejs, and modernizr are all wired together and ready to use, with no modifications made to them
* Write your javascript unit and integration tests in jasmine
* Run your integration tests during continuous integration only for faster development
* One command to launch the jasmine browser based test runner
* One command to run your jasmine unit and integration tests across all browsers you support using js-test-driver
* One command to update your javascript libraries to their latest versions
* One command to concatentate and minify your javascript and css
* One http request to load your deployed javascript
* One command to version your application, gzip your javascript and css, and deploy it to the cloudfront cdn using an s3 origin while setting gzip and caching http headers
* One command to rollback your application to a different version
* Precompile your handlebars templates
* Automatically deploy unminified version of your app at a different url in case you need to debug once deployed
* Track ui screen transitions in google analytics
* Automatic browser back button support using Backbone's router
* Runs on OSX, Windows, and Linux
* MIT licensed.

Quickstart
----------

* git clone https://github.com/davidjnelson/single-page-app-boilerplate.git --recursive
* cd single-page-app-boilerplate/application-server
* mvn jetty:run to launch a development web server accessible at http://localhost:8080
* mvn jasmine:bdd to launch a jasmine spec runner at http://localhost:8234
* mvn jstd:server to launch a js-test-driver server at http://localhost:9876
* open all the browsers you want to test your code in, navigate to http://localhost:9876 in each and click 'Capture Browser'
* mvn test to run your jasmine unit tests across all browsers you captured
* edit amazonAccessKey and amazon amazonKeySecret to match your amazon web service credentials in pom.xml
* mvn spab:versioned-deploy to gzip compress your app, deploy your app to the cloudfront content delivery network, set setting gzip and caching http headers, and invalidate your root object so your application becomes live as soon as all cloudfront edge servers have received your updated app
* mvn spab:rollback <version_number> to roll your app back to a specific version number on the cloudfront content delivery network

Have A Question Or An Idea For A New Feature?
---------------------------------------------
* Post it to the [Single Page App Boilerplate google group](https://groups.google.com/forum/#!forum/single-page-app-boilerplate).
* [Find me on twitter](https://twitter.com/david_j_nelson).
