'use strict';

module.exports = function ($timeout, $filter, $log) {
  return {
    restrict: 'E',
    link: function ($scope, $element, $attrs) {
      (function updateClock() {
        $element.text($filter('date')(new Date(), $attrs.format));
        $log.info('uopdate: ' + $element.text);
        $timeout(updateClock, 1000);
      })();
    }
  };
};
