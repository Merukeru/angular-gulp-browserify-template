'use strict';

var angular = require('angular');

require('angular-ui-router');
require('angular-ui-bootstrap');

var required = [
  'ui.router',
  'ui.bootstrap',
  'app.templates',
  'app.views'
];

angular.module('templateApp', required).

config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController as homeCtrl'
    })
    .state('components', {
      url: '/components',
      templateUrl: 'components.html',
      controller: 'ComponentsController as componentsCtrl'
    })
    .state('infos', {
      url: '/infos',
      templateUrl: 'infos.html',
      controller: 'InfosController as infosCtrl'
    });
});

require('./controllers');
require('./templates/templates');
require('./views/views');
require('./directives');
