(function () {
  "use strict";
  angular.module("app").controller("sports_ctrl", function($scope, $http) {
    
  $scope.setup = function () {
    $http.get("/api/v1/sports.json").then(function(response) {
      $scope.sports = response.data;
    });
  }


  $scope.flip = function (sport) {
    sport.bioVis = !sport.bioVis
  }


  $scope.addNewSport = function(sport_name, age, ball) {
    var sport = {
      name: sport_name,
      age: age,
      ball: ball
    };
    $scope.sports.push(sport);
    $scope.name = null;
    $scope.age = " ";
    $scope.ball = " ";
  }

  window.$scope = $scope;

  });
}());