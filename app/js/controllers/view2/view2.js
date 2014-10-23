'use strict';

app.view2 = angular.module('myApp.view2', ['ngRoute']);

app.view2.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'templates/view2.html',
    controller: 'View2Ctrl'
  });
}]);

app.view2.controller('View2Ctrl', [function() {

}]);