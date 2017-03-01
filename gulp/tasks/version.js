'use strict';

var config = require('../config');

var gulp = require('gulp');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var dateFormat = require('dateformat');

var pkg = require('../../package.json');

var stream = require('stream');

function string_src(filename, string) {
  var src = stream.Readable({objectMode: true});
  src._read = function () {
    this.push(new gutil.File({
      cwd: '',
      base: '',
      path: filename,
      contents: new Buffer(string)
    }));
    this.push(null)
  };
  return src
}

function version_str() {
  var versionStr = '';
  if (typeof argv.versionTs !== 'undefined' && argv.versionTs.length > 0) {
    versionStr += argv.versionTs;
  }
  if (typeof argv.versionCommitId !== 'undefined' && argv.versionCommitId.length > 0) {
    versionStr += ('-' + argv.versionCommitId);
  }
  if (typeof argv.versionBranch !== 'undefined' && argv.versionBranch.length > 0) {
    versionStr += ('-' + argv.versionBranch);
  }
  return versionStr;
}

gulp.task('version', function () {
  return string_src('version.txt', pkg.version)
    .pipe(gulp.dest(config.destPaths.dir))
});

gulp.task('version-dev', function () {
  return string_src('version.txt', version_str() + '-SNAPSHOT')
    .pipe(gulp.dest(config.destPaths.dir))
});

gulp.task('version-prod', function () {
  return string_src('version.txt', version_str())
    .pipe(gulp.dest(config.destPaths.dir))
});
