'use strict';

/**
 * @ngdoc overview
 * @name angSotdApp
 * @description
 * # angSotdApp
 *
 * Main module of the application.
 */

/* global app:true */

var app = angular
  .module('angSotdApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'picardy.fontawesome'
  ])
    .constant('FIREBASE_URL', 'https://fiery-fire-1125.firebaseio.com/');

app.config(function ($routeProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://www.youtube.com/**'
    ]);

    $routeProvider
      .when('/', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'
      })
        .when('/songs/:songId', {
            templateUrl: 'views/showsong.html',
            controller: 'SongViewCtrl'
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl'
        })
        .otherwise({
        redirectTo: '/'
      });
  });
