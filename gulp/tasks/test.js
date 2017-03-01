'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('unit', function (done) {
    return new Server({
        configFile: require('path').resolve('test/karma.conf.js'),
        singleRun: true
    }, done()).start();
});
