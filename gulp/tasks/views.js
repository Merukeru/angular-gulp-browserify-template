'use strict';

var config = require('../config');

var gulp = require('gulp');
var merge = require('merge-stream');
var templateCache = require('gulp-angular-templatecache');
var browserSync = require('browser-sync');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');

gulp.task('views', function () {
    var isProductionMode = (process.env.NODE_ENV === 'production');

    var templates = gulp.src(config.srcPaths.templates)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(templateCache({
            // create a new AngularJS module, instead of using an existing.
            standalone: true,
            module: 'app.templates',
            filename: 'templates.js'
        }))
        .pipe(gulp.dest(config.destPaths.templates))
        .pipe(browserSync.stream())
        .pipe(connect.reload());

    var views = gulp.src(config.srcPaths.views)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(templateCache({
            // create a new AngularJS module, instead of using an existing.
            standalone: true,
            module: 'app.views',
            filename: 'views.js'
        }))
        .pipe(gulp.dest(config.destPaths.views))
        .pipe(browserSync.stream())
        .pipe(connect.reload());

    var stream = merge(templates, views);
    return stream.isEmpty() ? null : stream;
});
