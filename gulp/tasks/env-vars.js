'use strict';

var gulp = require('gulp');

// call the tasks to set an environment variable
// use process.env to get environment variable value
// example:  var isProductionMode = (process.env.NODE_ENV === 'production');

gulp.task('set-env-timezone', function (done) {
  process.env.TZ = 'Europe/Berlin';
  done();
});

gulp.task('set-node-env-dev', function (done) {
  process.env.NODE_ENV = 'development';
  done();
});

gulp.task('set-node-env-prod', function (done) {
  process.env.NODE_ENV = 'production';
  done();
});

gulp.task('set-env-dev', gulp.series('set-env-timezone', 'set-node-env-dev'));

gulp.task('set-env-prod', gulp.series('set-env-timezone', 'set-node-env-prod'));

