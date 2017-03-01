'use strict';

var config = require('../config');

var logErrors = require('../utils/logErrors');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var rev = require('gulp-rev');
var connect = require('gulp-connect');

gulp.task('styles', function () {
    var isProductionMode = (process.env.NODE_ENV === 'production');

    return gulp.src(config.srcPaths.scss)
        .pipe(gulpif(!isProductionMode, sourcemaps.init()))
        .pipe(sassGlob())
        .pipe(sass({
            sourceComments: !isProductionMode,
            outputStyle: isProductionMode ? 'compressed' : 'nested',
            includePaths: config.srcPaths.sassIncludePaths
        }))
        .on('error', logErrors)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 8']
        }))
        .pipe(gulpif(isProductionMode, cleanCSS({compatibility: 'ie8'})))
        .pipe(gulpif(
            !isProductionMode,
            sourcemaps.write(isProductionMode ? './' : null))
        )
        .pipe(gulpif(isProductionMode, rev()))
        .pipe(gulp.dest(config.destPaths.stylesDir))
        .pipe(browserSync.stream())
        .pipe(connect.reload());
});
