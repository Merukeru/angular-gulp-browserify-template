'use strict';

var dateFormat = require('dateformat');

var gulp = require('gulp');
var argv = require('yargs')
  .default('versionCommitId', '')
  .default('versionTs', dateFormat(new Date(), "yyyy.mm.dd-HH.MM.ss"))
  .default('versionBranch', '')
  .argv;
var gutil = require('gulp-util');

function processArgs(id, value, defaultValue) {
  if (id === undefined || value === undefined) {
    return
  }
  gutil.log(gutil.colors.bgBlack.cyan('- ' + id + ' = ' + value));
}

gulp.task('printArgs', function (done) {
  gutil.log(gutil.colors.bgCyan.black('Build Args:'));
  processArgs('versionCommitId', argv.versionCommitId);
  processArgs('versionTs', argv.versionTs);
  processArgs('versionBranch', argv.versionBranch);
  done();
});
