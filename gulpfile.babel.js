'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var requireDir = require('require-dir');
var tasks = requireDir('./gulp', { recurse: true });

gulp.task('prebuild', gulp.parallel('styles', 'assets', 'views'));

gulp.task('dev', gulp.series('clean', 'printArgs', 'set-env-dev', 'lint', 'prebuild', 'version-dev', 'browserify', 'inject'));
gulp.task('prod', gulp.series('clean', 'printArgs', 'set-env-prod', 'lint', 'prebuild', 'version-prod', 'browserify', 'inject'));

gulp.task('serve', gulp.series('dev', 'browser-sync-dev', 'watch'));
gulp.task('serve-prod', gulp.series('prod', 'browser-sync-prod'));

gulp.task('live', gulp.series('dev', 'liveserver-dev', 'watch'));
gulp.task('live-prod', gulp.series('prod', 'liveserver-prod'));

gulp.task('test', gulp.series('dev', 'unit'));
gulp.task('default', gulp.series('prod', 'unit', 'targz-prod'));
gulp.task('snapshot', gulp.series('dev', 'unit', 'targz-dev'));

