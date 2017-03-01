var gutil = require('gulp-util');
var notify = require('gulp-notify');

var logErrors;

logErrors = function (error) {
    var isProductionMode = (process.env.NODE_ENV === 'production');
    if (!isProductionMode) {
        const args = Array.prototype.slice.call(arguments);

        notify.onError({
            title: 'Compile Error',
            message: '<%= error.message %>'
        }).apply(this, args);

        // Keep gulp from hanging on this task
        this.emit('end');
    } else {
        gutil.log(gutil.colors.red(error));
        process.exit(1);
    }
};

module.exports = logErrors;