'use strict';

angular.module('levelapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('myTheme')
      .primaryPalette('blue-grey')
      .accentPalette('amber');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          apps: function($http){
            var url = 'https://itunes.apple.com/lookup/?id=861014899&callback=JSON_CALLBACK';
            return $http.jsonp(url);
          }
        }

      });

    $urlRouterProvider.otherwise('/');
  })
;
