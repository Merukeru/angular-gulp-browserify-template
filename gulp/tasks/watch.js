'use strict';

var config = require('../config');

var gulp = require('gulp');
var bs = require("../utils/browser-sync");

var bsServer = bs.getServer();

gulp.task('watch', function watch() {
    process.env['IS_WATCHING'] = true;
    // scripts are automatically watched and rebundled by browserify task
    gulp.watch(config.srcPaths.js).on('change', gulp.series('inject', bsServer.reload));
    gulp.watch(config.srcPaths.scss).on('change', gulp.series('styles', 'inject', bsServer.reload));
    gulp.watch(config.srcPaths.images).on('change', gulp.series('images', bsServer.reload));
    gulp.watch(config.srcPaths.fonts).on('change', gulp.series('fonts', bsServer.reload));
    gulp.watch(config.srcPaths.views).on('change', gulp.series('views', bsServer.reload));
    gulp.watch(config.srcPaths.templates).on('change', gulp.series('views', bsServer.reload));
    gulp.watch(config.srcPaths.index).on('change', gulp.series('inject', bsServer.reload));
});
