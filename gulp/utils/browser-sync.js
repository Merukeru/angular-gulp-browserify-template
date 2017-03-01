'use strict';

var config = require('../config');
var browsersync = require("browser-sync");

var bsSpa = require('browser-sync-spa');

var bs = {};

bs.config = {
  server: 'bsserver',
  development: {
    https: true,
    server: config.destPaths.dir,
    reloadThrottle: 100,
    reloadDelay: 2000
  },
  production: {
    https: true,
    server: config.destPaths.dir,
    codeSync: false
  }
};

bs.getServer = function () {
  if (browsersync.has(bs.config.server)) {
    return browsersync.get(bs.config.server);
  }
  else {
    var server;
    server = browsersync.create(bs.config.server);
    server.use(bsSpa({
      selector: '[ng-app]'
    }));
    return server;
  }
};

module.exports = bs;
