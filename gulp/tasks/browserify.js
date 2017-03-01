'use strict';

var config = require('../config');
var logErrors = require('../utils/logErrors');
var logTime = require('../utils/logTime');

var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var babelify = require('babelify');
var debowerify = require('debowerify');
var ngAnnotate = require('browserify-ngannotate');
var envify = require('envify');
var watchify = require('watchify');
var rev = require('gulp-rev');
var connect = require('gulp-connect');

var isProductionMode;

var buildScript;

buildScript = function buildScript(file) {
    var bundler = browserify({
        entries: [file],
        debug: !isProductionMode,
        cache: {},
        packageCache: {}
    });

    if (!isProductionMode) {
        bundler = watchify(bundler);
        bundler.on('update', rebundle);
    }

    var transforms = [
        { name: babelify, options: {} },
        { name: debowerify, options: {} },
        { name: ngAnnotate, options: {} },
        { name: 'brfs', options: {} }
    ];

    transforms.forEach(function (transform) {
        bundler.transform(transform.name, transform.options);
    });

    function rebundle() {
        logTime.start();

        const stream = bundler.bundle();
        const sourceMapLocation = isProductionMode ? './' : '';

        return stream
            .on('error', logErrors)
            .on('end', logTime.end)
            .pipe(source('scripts/app.js'))
            .pipe(buffer())
            .pipe(gulpif(!isProductionMode, sourcemaps.init({ loadMaps: true })))
            .pipe(gulpif(isProductionMode, streamify(uglify())))
            .pipe(gulpif(!isProductionMode, sourcemaps.write(sourceMapLocation)))
            .pipe(gulpif(isProductionMode, rev()))
            .pipe(gulp.dest(config.destPaths.dir))
            .pipe(browserSync.stream())
            .pipe(connect.reload());
    }
    return rebundle();
};

gulp.task('browserify', function () {
    isProductionMode = (process.env.NODE_ENV === 'production');
    return buildScript(config.srcPaths.dir + config.srcPaths.main);
});
