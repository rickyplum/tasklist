app = angular.module('tasklist', ['ui.router']);


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

app.controller('Active.controller', ['$scope', function($scope) {
	console.log("test");
}]);

app.controller('History.controller', ['$scope', function($scope) {

}]);