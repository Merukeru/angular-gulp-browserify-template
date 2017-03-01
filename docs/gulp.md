# Gulp plugins and utils

## Gulp
https://github.com/gulpjs/gulp

### Install Gulp 4
```sh
// Uninstall previous Gulp installation and related packages
npm rm gulp -g
npm rm gulp-cli -g
cd [your-project-dir]
npm rm gulp --save-dev
npm rm gulp --save
npm rm gulp --save-optional
npm cache clean

// Install the latest Gulp CLI tools globally
npm install gulpjs/gulp-cli -g

// Install Gulp 4 into your project from 4.0 GitHub branch as dev dependency
npm install gulpjs/gulp#4.0 --save-dev

// Check the versions installed. Make sure your versions are not lower than shown here:
gulp -v
---
[10:48:35] CLI version 1.2.2
[10:48:35] Local version 4.0.0-alpha.2
```


## Gulp tasks and tools

### gulp-util
Utility functions for gulp plugins
https://github.com/gulpjs/gulp-util

### require-dir
Import directories and files
https://github.com/aseemk/requireDir

### del
Delete directories and files
https://github.com/sindresorhus/del

### babel-preset-es2015 and babel-register
Required for Gulp 4

### gulp-plumber
Prevent pipe breaking caused by errors from gulp plugins
https://github.com/floatdrop/gulp-plumber

### gulp-clean-css
see: clean-css
https://github.com/scniro/gulp-clean-css

**clean-css**
Clean-css is a fast and efficient CSS optimizer for Node.js platform and any modern browser
https://github.com/jakubpawlowicz/clean-css

### gulp-rev
Static asset revisioning by appending content hash to filenames unicorn.css → unicorn-d41d8cd98f.css
https://github.com/sindresorhus/gulp-rev

### gulp-sourcemaps
Create sourcemaps
https://github.com/floridoo/gulp-sourcemaps

### gulp-if
A ternary gulp plugin: conditionally control the flow of vinyl objects.
https://github.com/robrich/gulp-if

### gulp-notify
Send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module.
Fallbacks to Growl or simply logging.
https://github.com/mikaelbr/gulp-notify

### gulp-changed
Only pass through changed files.
https://github.com/sindresorhus/gulp-changed

### gulp-imagemin
Minify PNG, JPEG, GIF and SVG images with imagemin.
https://github.com/sindresorhus/gulp-imagemin

**imagemin**
Minify images seamlessly.
https://github.com/imagemin/imagemin

### merge-stream
Merge (interleave) a bunch of streams.
https://github.com/grncdr/merge-stream

### gulp-angular-templatecache
Concatenates and registers AngularJS templates in the $templateCache.
https://github.com/miickel/gulp-angular-templatecache

### gulp-concat
Streaming concat middleware for gulp.
https://github.com/contra/gulp-concat

### pretty-hrtime
process.hrtime() to words
https://github.com/robrich/pretty-hrtime

### gulp-streamify
Wrap old plugins to support streams.
https://github.com/nfroidure/gulp-streamify

### gulp-uglify
Minify JavaScript with UglifyJS2
https://github.com/terinjokes/gulp-uglify

### vinyl-source-stream TODO
Use conventional text streams at the start of your gulp or vinyl pipelines
https://github.com/hughsk/vinyl-source-stream

### vinyl-buffer TODO
Convert streaming vinyl files to use buffers
https://github.com/hughsk/vinyl-buffer

### isparta
Isparta is a code coverage tool for ES6 using babel.
https://github.com/douglasduteil/isparta

### envify
Selectively replace Node-style environment variables with plain strings.
https://github.com/hughsk/envify

### gulp-inject
A javascript, stylesheet and webcomponent injection plugin for Gulp.
https://github.com/klei/gulp-inject#injecting-angularjs-scripts-for-development

### gulp-tar
Create tarball from files.
https://github.com/sindresorhus/gulp-tar

### gulp-gzip
Gzip plugin for gulp.
https://github.com/jstuckey/gulp-gzip

### yargs
Node.js library to parse optstrings.
https://github.com/yargs/yargs/
http://yargs.js.org/




## Browserify

### browserify
browser-side require() the node.js way
http://browserify.org/
https://github.com/substack/node-browserify

### browserify-ngannotate
https://github.com/omsmith/browserify-ngannotate

**ng-annotate**
Add, remove and rebuild AngularJS dependency injection annotations
https://github.com/olov/ng-annotate

### browserify-istanbul
A browserify transform for the istanbul code coverage tool.
https://github.com/devongovett/browserify-istanbul

**istanbul**
Yet another JS code coverage tool that computes statement, line, function and branch coverage.
https://github.com/gotwarlost/istanbul

### babelify
Babel browserify transform
https://github.com/babel/babelify

**babel**
Babel is a compiler for writing next generation JavaScript.
http://babeljs.io/
https://github.com/babel/babel

### brfs 
browserify fs.readFileSync() static asset inliner
https://github.com/substack/brfs

### debowerify
A browserify transform to enable the easy use of bower components in browserify client javascript projects.
https://github.com/eugeneware/debowerify

### watchify
watch mode for browserify builds
https://github.com/substack/watchify



## Linters

### gulp-eslint
A gulp plugin for ESLint.
https://github.com/adametry/gulp-eslint

### eslint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
https://github.com/eslint/eslint

config files: .eslintignore .eslintrc.json

**init**
`./node_modules/.bin/eslint --init'

### eslint-config-angular
ESLint shareable config for Angular plugin
https://github.com/dustinspecker/eslint-config-angular

### eslint-plugin-angular
ESLint plugin for AngularJS applications.
https://github.com/Gillespie59/eslint-plugin-angular

### gulp-jshint
JSHint plugin for gulp.
https://github.com/spalger/gulp-jshint

### jshint
JSHint is a program that flags suspicious usage in programs written in JavaScript.
http://jshint.com/docs/

config files: .jscsrc .jshintrc

### jshint-stylish
Stylish reporter for JSHint.
https://github.com/sindresorhus/jshint-stylish

### gulp-sass-lint
Gulp plugin for Sass Lint.
https://github.com/sasstools/gulp-sass-lint

**sass-lint**
A Node-only Sass linter for both sass and scss syntax!
https://github.com/sasstools/sass-lint

config file: sass-lint.yml

### gulp-htmlhint
Htmlhint wrapper for gulp to validate your HTML.
https://github.com/bezoerb/gulp-htmlhintgulp-htmlhint

**htmlhint**
A Static Code Analysis Tool for HTML http://htmlhint.com/
https://github.com/yaniswang/HTMLHint

config file: .htmlhintrc



## test

### karma
A simple tool that allows you to execute JavaScript code in multiple real browsers.
https://karma-runner.github.io/1.0/index.html

### karma-coverage
A Karma plugin. Generate code coverage.
https://github.com/karma-runner/karma-coverage

### jasmine
Jasmine is a behavior-driven development framework for testing JavaScript code.
https://jasmine.github.io/

### karma-jasmine
A Karma plugin - adapter for Jasmine testing framework.

### karma-chrome-launcher
A Karma plugin. Launcher for Chrome and Chrome Canary.
https://github.com/karma-runner/karma-chrome-launcher

### karma-phantomjs-launcher
A Karma plugin. Launcher for PhantomJS.
https://github.com/karma-runner/karma-phantomjs-launcher

### karma-html-detailed-reporter
Karma Jasmine HTML Reporter
https://github.com/a11smiles/karma-html-detailed-reporter

### karma-ng-html2js-preprocessor
A Karma plugin. Compile AngularJS 1.x and 2.x templates to JavaScript on the fly.
https://github.com/karma-runner/karma-ng-html2js-preprocessor

### karma-browserify
A fast Browserify integration for Karma that handles large projects with ease
https://github.com/nikku/karma-browserify



## Live server

### browser-sync
Time-saving synchronised browser testing.
https://www.browsersync.io/
https://github.com/Browsersync/browser-sync

### browser-sync-spa
Better Single Page App support for BrowserSync
https://github.com/shakyShane/browser-sync-spa

### gulp-connect
Gulp plugin to run a webserver (with LiveReload)
https://github.com/avevlad/gulp-connect
