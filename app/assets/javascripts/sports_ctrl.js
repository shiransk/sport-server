(function () {
  "use strict";
  angular.module("app").controller("sports_ctrl", function($scope, $http) {
    
   $scope.setup = function () {
    $http.get("/api/v1/sports.json").then(function(response) {
      $scope.sports = response.data
      $scope.test = true

      $scope.flip = function () {
       $scope.test = !$scope.test;
      }


    });
   }


    window.$scope = $scope;
  });
}());