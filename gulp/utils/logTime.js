'use strict';

var gutil = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');

var startTime;
var logTime;

logTime = {};

logTime.start = function start() {
    startTime = process.hrtime();
    gutil.log(`${gutil.colors.green('Rebundling')}...`);
};

logTime.end = function end() {
    const taskTime = process.hrtime(startTime);
    const prettyTime = prettyHrtime(taskTime);
    gutil.log(`Finished ${gutil.colors.green('rebundling')} in ${gutil.colors.magenta(prettyTime)}`);
};

module.exports = logTime;