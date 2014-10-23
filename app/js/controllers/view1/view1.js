'use strict';

app.view1 = angular.module('myApp.view1', ['ngRoute']);

app.view1.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'templates/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.view1.controller('View1Ctrl', ['$scope', function($scope, $timeout, keys) {

    $scope.keys = keys;

    $scope.list = [{
        "id": 1,
        "title": "1. dragon-breath",
        "items": []
    }, {
        "id": 2,
        "title": "2. moiré-vision",
        "items": [{
            "id": 21,
            "title": "2.1. tofu-animation",
            "items": [{
                "id": 211,
                "title": "2.1.1. spooky-giraffe",
                "items": []
            }, {
                "id": 212,
                "title": "2.1.2. bubble-burst",
                "items": []
            }]
        }, {
            "id": 22,
            "title": "2.2. barehand-atomsplitting",
            "items": []
        }]
    }, {
        "id": 3,
        "title": "3. unicorn-zapper",
        "items": []
    }, {
        "id": 4,
        "title": "4. romantic-transclusion",
        "items": []
    }];

    $scope.treeOptions = {
        accept: function(sourceNodeScope, destNodesScope, destIndex) {
            console.log("HI!!!");
            return true;
        }
    };

    $scope.callbacks = {
    };

    $scope.remove = function(scope) {
        scope.remove();
    };

    $scope.toggle = function(scope) {
        scope.toggle();
    };
}]);