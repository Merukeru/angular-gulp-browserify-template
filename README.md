[![Build Status](https://travis-ci.org/Merukeru/angular-gulp-browserify-template.svg?branch=master)](https://travis-ci.org/Merukeru/angular-gulp-browserify-template)

# AngularJS Template

Template for AngularJS projects using Maven, Gulp, Karma, Jasmine, Browsersync and Browserify as toolchain.

## Setup

Checkout this repo. 

`yarn global add gulpjs/gulp-cli` (or `npm install --global gulp-cli`)

Run `yarn` (or `npm install`)

## Build for development

Run `gulp` for building and `gulp serve` for preview.

### Default gulp task

The command `gulp` is the default gulp task and will build the project production ready (including building target files, run tests and pack the project in a .tar.gz file)

To create a build artifact it is possible to run gulp command and pass arguments `gulp --versionCommitId=#1234567 --versionTs=00.00.00-00:00 --versionBranch=develop`.
This will create a build artifact with a filename including this set of information.

### More gulp tasks

See `gulpfile.babel.js`

## Testing

Running `gulp test` will run the unit tests using karma and jasmine.

## Maven

It is possible to build this project using maven command `maven clean install`.

## Notes

Inspired from:

**Gulp**
[https://github.com/gulpjs/gulp/tree/4.0/docs/recipes](https://github.com/gulpjs/gulp/tree/4.0/docs/recipes)

**AngularJs and Browserify**
[https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplates](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplates)
[https://angularjs.de/artikel/angularjs-browserify](https://angularjs.de/artikel/angularjs-browserify)

## License

MIT (see LICENSE.md)

(c) by 2017 by Merukeru
