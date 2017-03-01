'use strict';

module.exports = function () {
  var vm = this;

  vm.title = 'Components';
  vm.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'popoverTemplate.html',
    title: 'Title'
  };
};
