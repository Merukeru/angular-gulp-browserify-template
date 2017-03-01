'use strict';

describe('Views: Template', function () {

  beforeEach(module('templateApp'));

  var $templateCache;

  beforeEach(inject(function (_$templateCache_) {
    $templateCache = _$templateCache_;
  }));

  it(' infos.html should be loaded via $templateCache', function () {
    var homeTemplate = $templateCache.get('infos.html');
    expect(homeTemplate).toBeDefined();
    expect(homeTemplate).toContain('<h2>Used technologies</h2>');
  });
});
