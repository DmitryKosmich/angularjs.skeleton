(function(){
    'use strict';

    app.factory('TREE',['CONST', function(CONST) {

        var tree = [
            {
                "title": CONST.TREE_ITEM.TRAC_MASTER,
                "children" : [
                    {
                        "title": CONST.TREE_ITEM.COMPANIES,
                        "children" : [
                            {
                                "title": "test_Company_1",
                                "children" : []
                            },
                            {
                                "title": "test_Company_2",
                                "children" : [
                                    {
                                        "title": "test_Company_long_name_1",
                                        "children" : []
                                    },
                                    {
                                        "title": "test_Company_very_long_name_2",
                                        "children" : []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": CONST.TREE_ITEM.TRAC_UNITS,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.PARTS,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.RECEIVES,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.PROCESSES,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.CERTIFICATIONS,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.SHIPPERS,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.SCHEDULES,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.INVOICES,
                        "children" : []
                    },
                    {
                        "title": CONST.TREE_ITEM.BILL_OF_LADINGS,
                        "children" : []
                    }
                ]
            }
        ];

        var options = {
            nodeChildren: "children",
            dirSelectable: true,
            injectClasses: {
                ul: "a1",
                li: "a2",
                liSelected: "a7",
                iExpanded: "a3",
                iCollapsed: "a4",
                iLeaf: "a5",
                label: "a6",
                labelSelected: "a8"
            }
        };

        var currentNode = {};

        var setCurrentNode = function(newNode){
            currentNode = newNode;
        };

        var getCurrentNode = function(){
            return currentNode;
        };

        var setTree = function(newTree){
            tree = newTree;
        };

        var getTree = function(){
            return tree;
        };

        var setOptions = function(newOptions){
            options = newOptions;
        };

        var getOptions = function(){
            return options;
        };

        var deleteNode = function(){
            if(currentNode){
                var deleteStep = function(arr, title){
                    for(var index in arr){
                        if(title == arr[index].title){
                            if (index > -1) {
                                arr.splice(index, 1);
                            }
                            return;
                        }
                        deleteStep(arr[index].children, title);
                    }
                };
                deleteStep(tree, currentNode.title);
            }
        };

        var addNode = function(title){
            console.log(findNode(tree, title));
        };

        var renameNode = function(title){
            console.log(findNode(tree, title));
        };

        var findNode = function(arr, title){
            for(var elem in arr){
                if(title == arr[elem].title){
                    return arr[elem];
                }
                return findNode(arr[elem].children, title);
            }
        };

        return {

            setCurrentNode: setCurrentNode,

            getCurrentNode: getCurrentNode,

            setTree: setTree,

            getTree: getTree,

            setOptions: setOptions,

            getOptions: getOptions,

            deleteNode: deleteNode,

            addNode: addNode,

            renameNode: renameNode,

            TYPE: {
                CLIENT: "client",
                TOOL: "tool",
                MACHINE: "machine"
            }

        };
    }]);
})();