app.controller('HomeController', ['$scope', '$interval', '$http',
  function($scope, $interval, $http){
    $scope.data = {
      "valueNum": 56,
      "value": "$56",
      "goal": "$125",
      "remaining": "$69"
    }
    var stop;
    $scope.progressValue = 0;
    $scope.progress = function() {
      stop = $interval(function() {
        if ($scope.progressValue === $scope.data.valueNum) {
          $interval.cancel(stop);
        } else {
          $scope.progressValue++;
        }
      }, 50);
    }
    angular.element(document).ready($scope.progress);
}]);