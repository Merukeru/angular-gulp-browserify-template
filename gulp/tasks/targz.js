'use strict';

var config = require('../config');

var pkg = require('../../package.json');

var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var dateFormat = require('dateformat');
var plumber = require('gulp-plumber');
var argv = require('yargs').argv;

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('targz', function (done) {
  var now = new Date();

  gulp.src(config.destPaths.allFiles)
    .pipe(plumber())
    .pipe(tar('release-v' + pkg.version + '-' + dateFormat(now, "yyyy.mm.dd-HH.MM.ss") + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest(config.targetPath.dir));
  done();
});

gulp.task('targz-dev', function (done) {
  var now = new Date();

  gulp.src(config.destPaths.allFiles)
    .pipe(plumber())
    .pipe(tar('release-v' + argv.versionTs + '-' + argv.versionCommitId + '-SNAPSHOT.tar'))
    .pipe(gzip())
    .pipe(gulp.dest(config.targetPath.dir));
  done();
});

gulp.task('targz-prod', function (done) {
  var now = new Date();

  gulp.src(config.destPaths.allFiles)
    .pipe(plumber())
    .pipe(tar('release-v' + argv.versionTs + '-' + argv.versionCommitId + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest(config.targetPath.dir));
  done();
});
