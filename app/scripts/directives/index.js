'use strict';

require('angular').module('templateApp').
directive('simpleClock', require('./clock-directive')).
directive('appVersion', require('./version-directive'));
