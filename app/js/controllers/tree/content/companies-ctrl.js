(function() {
    'use strict';

    app.tree.client = angular.module('myApp.tree.companies', []);

    app.tree.client.controller('CompaniesCtrl', ['$scope', '$state', 'TREE', 'CONST', function($scope, $state, TREE, CONST) {

        $scope.name = TREE.getCurrentNode().title;

        $scope.$on(CONST.EVENT.ON_TREE_NODE_SELECT, function (event, data) {
            $scope.name = data.title;
        });

        $scope.deleteNode = function(){
            TREE.deleteNode();
        };

        $scope.renameNode = function(){
            TREE.renameNode($scope.name);
            $scope.dataForTheTree = TREE.getTree();
        };

        $scope.addNode = function(){
            TREE.addNode($scope.childName);
        };

        $scope.tableData = [
            {
                CustomerId: 'ALCOA',
                CustomerName: 'ALCOA ',
                LocationId: 'ALCOA',
                Route: 'ALCOA',
                Address1: 'ALCOA ',
                Address2: 'ALCOA',
                City: 'ALCOA  ',
                State: 'ALCOA',
                Zip: 'ALCOA',
                Other: 'ALCOA'
            },
            {
                CustomerId: 'ALCOA1',
                CustomerName: 'ALCOA',
                LocationId: 'ALCOA1',
                Route: 'ALCOA',
                Address1: 'ALCOA',
                Address2: 'ALCOA',
                City: 'ALCOA',
                State: 'ALCOA',
                Zip: 'ALCOA',
                Other: 'ALCOA'
            },
            {
                CustomerId: 'ALCOA1',
                CustomerName: 'ALCOA',
                LocationId: 'ALCOA1',
                Route: 'ALCOA',
                Address1: 'ALCOA',
                Address2: 'ALCOA',
                City: 'ALCOA',
                State: 'ALCOA',
                Zip: 'ALCOA',
                Other: 'ALCOA'
            }
        ];

    }]);
})();