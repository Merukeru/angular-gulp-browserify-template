'use strict';

var config = require('../config');

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('liveserver-dev', function () {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('liveserver-prod', function () {
  connect.server({
    root: 'dist',
    livereload: false
  });
});
