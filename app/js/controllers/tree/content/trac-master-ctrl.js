(function() {
    'use strict';

    app.tree.tool = angular.module('myApp.tree.trac-master', []);

    app.tree.tool.controller('TracMasterCtrl', ['$scope', '$state', 'TREE', 'CONST', function($scope, $state, TREE, CONST) {

        $scope.name = TREE.getCurrentNode().title;

        $scope.$on(CONST.EVENT.ON_TREE_NODE_SELECT, function (CONST, data) {
            $scope.name = data.title;
        });

        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: false }
        ];

        $scope.alertMe = function() {
            setTimeout(function() {
                alert('You\'ve selected the alert tab!');
            });
        };

    }]);
})();