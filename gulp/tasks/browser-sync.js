'use strict';

var config = require('../config');

var gulp = require('gulp');
var bs = require("../utils/browser-sync");

var bsServer = bs.getServer();

gulp.task('browser-sync-dev', function (done) {
  return bsServer.init(bs.config.development, done);
});

gulp.task('browser-sync-prod', function (done) {
    return bsServer.init(bs.config.production, done);
});
