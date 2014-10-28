(function() {
    'use strict';

    app.tree.machine = angular.module('myApp.tree.parts', []);

    app.tree.machine.controller('PartsCtrl', ['$scope', '$state', 'TREE', 'CONST', function($scope, $state, TREE, CONST) {

        $scope.name = TREE.getCurrentNode().title;

        $scope.$on(CONST.EVENT.ON_TREE_NODE_SELECT, function (CONST, data) {
            $scope.name = data.title;
        });

    }]);
})();
