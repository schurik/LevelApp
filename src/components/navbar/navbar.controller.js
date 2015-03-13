'use strict';

angular.module('levelapp')
  .controller('NavbarCtrl', function ($scope, $window, $http) {
    $scope.appIds = [861014899];
    $scope.apps = [];

    $scope.devices = [
      {label: 'ANY', value: 1},
      {label: 'iPhone', value: 2},
      {label: 'iPad', value: 3}
    ];

    $scope.selectedDevice = {};

    $scope.filterDevice = function(device) {
      $scope.selectedDevice = device;
      for(var i=0; i<$scope.appIds.length; i++) {
        //loadApp($scope.appIds[i]);
      }
    };

    /*
    function loadApp(id){
      var url = 'https://itunes.apple.com/lookup/?id='+ id +'&callback=JSON_CALLBACK';
      $http.jsonp(url)
        .success(function(data, status, headers, config) {
          if(data.resultCount == 1) {
            $scope.apps.push(data.results[0]);
          }
        })
        .error(function(data, status, headers, config){

        });

    }
*/
  });
