'use strict';

var config = require('../config');

var gulp = require('gulp');
var gulpif = require('gulp-if');
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');

gulp.task('inject', function () {
  var isProductionMode = (process.env.NODE_ENV === 'production');

  var compiledScripts = gulp.src(config.destPaths.dir + '/**/*.js');
  var compiledStyles = gulp.src(config.destPaths.dir + '/**/*.css');

  return gulp.src(config.srcPaths.index)
    .pipe(plumber())
    .pipe(gulp.dest(config.destPaths.dir))
    .pipe(inject(compiledScripts, {relative: true}))
    .pipe(inject(compiledStyles, {relative: true}))
    .pipe(gulpif(isProductionMode, htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest(config.destPaths.dir))
    .pipe(browserSync.stream())
    .pipe(connect.reload());
});
