app = angular.module('tasklist', ['ui.router', 'firebase']);


app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('active', {
     url: '/',
     controller: 'Active.controller',
     templateUrl: '/templates/active-tasks.html'
   });

    $stateProvider.state('taskhistory', {
     url: '/task-history',
     templateUrl: '/templates/task-history.html',
     controller: 'History.controller'
   });

 }]);

app.controller('Active.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://incandescent-heat-7820.firebaseIO.com");
  $scope.tasks = $firebaseArray(ref);
   $scope.addTask = function() {
    $scope.tasks.$add({
      name: $scope.newTaskName,
      priority: $scope.newTaskPriority
    });
  };
	console.log("test");
}]);

app.controller('History.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://incandescent-heat-7820.firebaseIO.com");
  $scope.tasks = $firebaseArray(ref);

}]);