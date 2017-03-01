'use strict';

var config = require('../config');

var gulp = require('gulp');
var del = require('del');

var generatedDirs = [
    config.tempPaths.dir,
    config.destPaths.dir,
    config.targetPath.dir
];

gulp.task('clean-output', function () {
    return del(generatedDirs);
});

gulp.task('clean-reports', function () {
    return del(['./_coverage', './_reports']);
});

gulp.task('clean-templates', function () {
  return del(['./app/scripts/views/views.js', './app/scripts/templates/templates.js']);
});

gulp.task('clean', gulp.parallel('clean-output', 'clean-reports', 'clean-templates'));
