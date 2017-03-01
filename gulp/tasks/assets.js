'use strict';

var config = require('../config');

var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');

gulp.task('images', function () {
  var isProductionMode = (process.env.NODE_ENV === 'production');

  return gulp.src(config.srcPaths.images)
    .pipe(changed(config.destPaths.images))
    .pipe(gulpif(isProductionMode, imagemin()))
    .pipe(gulp.dest(config.destPaths.images))
    .pipe(browserSync.stream())
    .pipe(connect.reload());
});

gulp.task('rootFiles', function () {
  return gulp.src(config.srcPaths.rootFiles)
    .pipe(changed(config.destPaths.dir))
    .pipe(gulp.dest(config.destPaths.dir))
    .pipe(browserSync.stream())
    .pipe(connect.reload());
});

gulp.task('errorPages', function () {
  return gulp.src(config.srcPaths.errorPages)
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyCSS: true, minifyJS: true}))
    .pipe(changed(config.destPaths.dir))
    .pipe(gulp.dest(config.destPaths.dir))
    .pipe(browserSync.stream())
    .pipe(connect.reload());
});

gulp.task('fonts', function () {
  var fonts = config.vendor.fonts;
  fonts.push(config.srcPaths.fonts);

  return gulp.src(fonts)
    .pipe(changed(config.destPaths.fonts))
    .pipe(gulp.dest(config.destPaths.fonts))
    .pipe(browserSync.stream())
    .pipe(connect.reload());
});

gulp.task('documents', function () {
  return gulp.src(config.srcPaths.documents)
    .pipe(changed(config.destPaths.documents))
    .pipe(gulp.dest(config.destPaths.documents))
    .pipe(browserSync.stream())
    .pipe(connect.reload());
});

gulp.task('assets', gulp.parallel('images', 'fonts', 'documents', 'errorPages', 'rootFiles'));
