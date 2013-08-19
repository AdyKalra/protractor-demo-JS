'use strict';

angular.module('protractorDemoApp', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/form', {
      templateUrl: 'views/form.html',
      controller: 'FormCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
