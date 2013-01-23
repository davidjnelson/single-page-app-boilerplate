Single Page App Boilerplate
===========================

Single Page App Boilerplate allows you to easily and quickly create single page apps using best practices such as test driven development, javascript dependency management, and continuous integration.

Goals
-----

* Make test driven development in javascript easy
* Make continuous integration of web user interfaces easy
* Provide a solid foundation wiring together popular front end libraries in an easy to use way
* Make it easy to deploy and rollback versioned web user interface code and images to aws elastic beanstalk

Features
--------

* Based on html5 boilerplate
* Backbone, jquery, underscore, handlebars, requirejs, and modernizr are all wired together and ready to use
* Write your javascript unit and integration tests in jasmine
* One command to launch the jasmine browser based test runner
* One command to run then jasmine unit and integration tests across all browsers you support using js-test-driver
* One command to concatentate and minify your javascript and css
* One http request to load your deployed javascript
* One command to version your application, gzip your javascript and css, and deploy it to elastic beanstalk
* One command to rollback your application to a different version
* Precompile your handlebars templates
* Automatically deploy unminified version of your app at a different url in case you need to debug once deployed
* Track ui screen transitions in google analytics every time your Backbone router url changes
* Automatic browser back button support using Backbone's router
* Easily localize your application
* Runs on OSX, Windows, and Linux
* MIT licensed.

Quickstart
----------

* `git clone https://github.com/davidjnelson/single-page-app-boilerplate.git --recursive`
* `cd single-page-app-boilerplate/application-server`
* `mvn jetty:run` to launch a development web server accessible at http://localhost:8080
* `mvn jasmine:bdd` to launch a jasmine spec runner at http://localhost:8234
* `java -jar ../bin/JsTestDriver.jar --port 9876` to launch a js-test-driver server at http://localhost:9876
* open all the browsers you want to test your code in, navigate to http://localhost:9876 in each and click 'Capture Browser'
* `mvn test` to run your jasmine unit and integration tests across all browsers you captured
* import the project into your favorite IDE by importing the maven `pom.xml` file
* add your jasmine specs to `src/test/specs`
* add your jasmine integration test specs to `src/test/integration-test-specs`
* add your app code to `src/main/webapp/js`.`{  }`Router.js is your application entry point.  If you want to use more than one router you can create more instances of Router in main.js.
* add your google analytics account number to `src/main/webapp/js/Constants.js`
* `mvn install -P optimize` to minify and concatenate css
* edit `amazonAccessKey` and `amazonKeySecret` to match your amazon web service credentials in `pom.xml`
* `mvn install beanstalk:upload-source-bundle beanstalk:create-application-version beanstalk:update-environment` to gzip compress your app, and deploy your app to elastic beanstalk, without 
* `mvn beanstalk:rollback-version` to roll your app back to a specific version number

Future Project Goals
--------------------
* Run your integration tests during continuous integration only for faster development
* jshint integration
* deployment to the cloudfront cdn using an s3 origin while setting gzip and caching http headers
* no modifications made javascript libraries by using requirejs shims.  currently libraries are wrapped with an AMD module
* One command to update your javascript libraries to their latest versions
* Integrate with yeoman for scaffolding for major js libraries


More Detailed Documentation
---------------------------

* [How do I map a domain name to my app once it's deployed to cloudfront?](https://github.com/davidjnelson/single-page-app-boilerplate/wiki/How-do-I-map-a-domain-name-to-my-app-once-it's-deployed-to-cloudfront%3F)
* [How do I access my application server from my ui code?](https://github.com/davidjnelson/single-page-app-boilerplate/wiki/How-do-I-access-my-application-server-from-my-ui-code%3F)
* [How do I setup continuous integration?](https://github.com/davidjnelson/single-page-app-boilerplate/wiki/How-do-I-setup-continuous-integration%3F)
* [How do I update the javascript library dependencies to their latest versions?](https://github.com/davidjnelson/single-page-app-boilerplate/wiki/How-do-I-update-the-javascript-library-dependencies-to-their-latest-versions%3F)
* [How do install java and maven in under 10 minutes if I don't already have them installed?](https://github.com/davidjnelson/single-page-app-boilerplate/wiki/How-do-install-java-and-maven%3F)
* [Do I have to deploy my application to cloudfront?](https://github.com/davidjnelson/single-page-app-boilerplate/wiki/Do-I-have-to-deploy-my-application-to-cloudfront%3F)
* [Do you recommend a specific IDE for javascript development?](https://github.com/davidjnelson/single-page-app-boilerplate/wiki/Do-you-recommend-a-specific-IDE-for-javascript-development%3F)

Examples
--------

* [TODO MVC App In Single Page App Boilerplate](https://github.com/davidjnelson/todo-mvc-in-single-page-app-boilerplate)

Have A Question, Found A Bug, Idea For A New Feature, Or Want To Follow Me On Twitter?
--------------------------------------------------------------------------------------

* Questions: [Post it to the Single Page App Boilerplate google group](https://groups.google.com/forum/#!forum/single-page-app-boilerplate)
* Found A Bug: [Create A New Issue](https://github.com/davidjnelson/single-page-app-boilerplate/issues/new)
* Idea For A New Feature: [Create A New Issue](https://github.com/davidjnelson/single-page-app-boilerplate/issues/new)
* Follow Me On Twitter: [@david_j_nelson](https://twitter.com/david_j_nelson)
