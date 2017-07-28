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
                        templateUrl: 'views/header2.html',
                        controller: 'ShopController'
                    },
                    'content@': {
                        templateUrl: 'views/shop.html',
                        controller: 'ShopController'
                    }
                }
            })

            .state('app.admin', {
                url: 'admin',
                views: {
                    'header@': {
                        templateUrl: 'views/header2.html',
                        controller: 'AdminController'
                    },
                    'content@': {
                        templateUrl: 'views/admin.html',
                        controller: 'AdminController'
                    }
                }
            })

            .state('app.rezidential', {
                url: 'rezidential',
                views: {
                    'header@': {
                        templateUrl: 'views/header2.html',
                        controller: 'RezidentialController'
                    },
                    'content@': {
                        templateUrl: 'views/rezidential.html',
                        controller: 'RezidentialController'
                    }
                }
            })

            .state('app.comercial', {
                url:'comercial',
                views: {
                    'header@':{
                        templateUrl : 'views/header2.html',
                        controller: 'ComercialController'
                    },
                    'content@':{
                        templateUrl : 'views/comercial.html',
                        controller: 'ComercialController'
                    }
                }
            })

            .state('app.retail', {
                url:'retail',
                views: {
                    'header@':{
                        templateUrl : 'views/header2.html',
                        controller: 'RetailController'
                    },
                    'content@':{
                        templateUrl : 'views/retail.html',
                        controller: 'RetailController'
                    }
                }
            });


        $urlRouterProvider.otherwise('/');

    })
;
