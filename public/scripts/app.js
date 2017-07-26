'use strict';

angular.module('mgmApp', ['ui.router', 'ngResource'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })

            .state('app.shop', {
                url: 'shop',
                views: {
                    'header@': {
                        templateUrl: 'views/header2.html'
                    },
                    'content@': {
                        templateUrl: 'views/shop.html',
                        controller: 'ShopController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    })
;
