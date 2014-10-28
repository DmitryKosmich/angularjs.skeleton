var app = {};

(function(){
    'use strict';

    app = angular.module('myApp', [
        'ui.router',
        'ui.bootstrap',

        'myApp.tree',
        'myApp.tree.trac-master',
        'myApp.tree.companies',
        'myApp.tree.trac-units',
        'myApp.tree.parts',
        'myApp.tree.receives',
        'myApp.tree.processes',
        'myApp.tree.certifications',
        'myApp.tree.shippers',
        'myApp.tree.schedules',
        'myApp.tree.invoices',
        'myApp.tree.bill-of-ladings',

        'myApp.other',
        'myApp.version',
        'treeControl'
    ]);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/tree");

        $stateProvider
            .state('tree-view', {
                url: "/tree",
                templateUrl: "partials/tree-view.html",
                controller: "TreeCtrl"
            })
                .state('tree-view.trac-master', {
                    url: "/tree-trac-master",
                    templateUrl: "partials/tree-content/tree-trac-master.html",
                    controller: 'TracMasterCtrl'
                })
                .state('tree-view.companies', {
                    url: "/companies",
                    templateUrl: "partials/tree-content/tree-companies.html",
                    controller: 'CompaniesCtrl'
                })
                .state('tree-view.trac-units', {
                    url: "/trac-units",
                    templateUrl: "partials/tree-content/tree-trac-units.html",
                    controller: 'TracUnitsCtrl'
                })
                .state('tree-view.parts', {
                    url: "/parts",
                    templateUrl: "partials/tree-content/tree-parts.html",
                    controller: 'PartsCtrl'
                })
                .state('tree-view.receives', {
                    url: "/receives",
                    templateUrl: "partials/tree-content/tree-receives.html",
                    controller: 'ReceivesCtrl'
                })
                .state('tree-view.processes', {
                    url: "/processes",
                    templateUrl: "partials/tree-content/tree-processes.html",
                    controller: 'ProcessesCtrl'
                })
                .state('tree-view.certifications', {
                    url: "/certifications",
                    templateUrl: "partials/tree-content/tree-certifications.html",
                    controller: 'CertificationsCtrl'
                })
                .state('tree-view.shippers', {
                    url: "/shippers",
                    templateUrl: "partials/tree-content/tree-shippers.html",
                    controller: 'ShippersCtrl'
                })
                .state('tree-view.schedules', {
                    url: "/schedules",
                    templateUrl: "partials/tree-content/tree-schedules.html",
                    controller: 'SchedulesCtrl'
                })
                .state('tree-view.invoices', {
                    url: "/invoices",
                    templateUrl: "partials/tree-content/tree-invoices.html",
                    controller: 'InvoicesCtrl'
                })
                .state('tree-view.bill-of-ladings', {
                    url: "/bill-of-ladings",
                    templateUrl: "partials/tree-content/tree-bill-of-ladings.html",
                    controller: 'BillOfLadingsCtrl'
                })

            .state('other-view', {
                url: "/other",
                templateUrl: "partials/other-view.html",
                controller: "OtherCtrl"
            });
    }]);
})();
