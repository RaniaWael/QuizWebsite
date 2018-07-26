'use strict';

/**
 * @ngdoc overview
 * @name quizWebsiteApp
 * @description
 * # quizWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('quizWebsiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/questionsPage.html',
        controller: 'questionsCtrl',
        controllerAs: 'questionsCtrl'
      })
      .when('/questions', {
        templateUrl: 'views/questionsPage.html',
        controller: 'questionsCtrl',
        controllerAs: 'questionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
