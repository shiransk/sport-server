(function () {
  "use strict";
  angular.module("app").controller("sports_ctrl", function($scope, $http) {
    
  $scope.setup = function () {
    $http.get("/api/v1/sports.json").then(function(response) {
      $scope.sports = response.data;
    });
  }


  $scope.flip = function(sport) {
    sport.bioVis = !sport.bioVis
  }

  $scope.addNewSport = function(sport_name, age, ball) {
    var sport = {
      name: sport_name,
      age: age,
      ball: ball
    };

    $http.post("/api/v1/sports.json", sport).then(function(response) {
      $scope.sports.push(response.data);     
    }, function(error) {
      $scope.errors = error.data.errors
    }); 
  }

  $scope.delete = function(sport) {
    $http.delete("/api/v1/sports/" + sport.id).then(function(response) {
      console.log(response.data)
    })
  }

  

  // $scope.toggleAttr = function(attr) {
  //   if(attr == $scope.orderAttr)
  // }

  window.$scope = $scope;

  });
}());