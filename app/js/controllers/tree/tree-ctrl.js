(function() {
    'use strict';

    app.tree = angular.module('myApp.tree', []);

    app.tree.controller('TreeCtrl', ['$scope', '$state', 'TREE', 'CONST', function($scope, $state, TREE, CONST) {

        $scope.treeOptions = TREE.getOptions();

        $scope.dataForTheTree = TREE.getTree();

        $scope.expandedNodes =  [$scope.dataForTheTree[0]];

        $scope.showSelected = function(node){

            TREE.setCurrentNode(node);
            $scope.$broadcast(CONST.EVENT.ON_TREE_NODE_SELECT, node);

            var currNode = TREE.getCurrentNode();

            $scope.contentPanelTitle = currNode.title;

            if(currNode){
                switch (currNode.title){
                    case CONST.TREE_ITEM.TRAC_MASTER: {
                        $state.go('tree-view.trac-master');
                        break;
                    }
                    case CONST.TREE_ITEM.COMPANIES: {
                        $state.go('tree-view.companies');
                        break;
                    }
                    case CONST.TREE_ITEM.TRAC_UNITS: {
                        $state.go('tree-view.trac-units');
                        break;
                    }
                    case CONST.TREE_ITEM.PARTS: {
                        $state.go('tree-view.parts');
                        break;
                    }
                    case CONST.TREE_ITEM.RECEIVES: {
                        $state.go('tree-view.receives');
                        break;
                    }
                    case CONST.TREE_ITEM.PROCESSES: {
                        $state.go('tree-view.processes');
                        break;
                    }
                    case CONST.TREE_ITEM.CERTIFICATIONS: {
                        $state.go('tree-view.certifications');
                        break;
                    }
                    case CONST.TREE_ITEM.SHIPPERS: {
                        $state.go('tree-view.shippers');
                        break;
                    }
                    case CONST.TREE_ITEM.SCHEDULES: {
                        $state.go('tree-view.schedules');
                        break;
                    }
                    case CONST.TREE_ITEM.INVOICES: {
                        $state.go('tree-view.invoices');
                        break;
                    }
                    case CONST.TREE_ITEM.BILL_OF_LADINGS: {
                        $state.go('tree-view.bill-of-ladings');
                        break;
                    }
                    default :{
                        //do nothing
                    }
                }
            }
        }
    }]);
})();