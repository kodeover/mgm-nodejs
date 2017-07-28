'use strict';

angular.module('mgmApp')
    .constant("sendMessageURL", "/send-message")

    .controller('IndexController', ['$scope', 'dataFactory', 'sendMessageURL', '$http', function ($scope, dataFactory, sendMessageURL, $http) {
        $scope.products = dataFactory.getProducts();
        $scope.nr = 1;
        $scope.nm = 0;
        $scope.highlights = dataFactory.getHighlights();

        $scope.message = {'name': '', 'email': '', 'phone': '', 'message': ''};
        $scope.formError = {'name': true, 'email': true, 'phone': true, 'message': true, 'isError': true};

        $scope.sendMessage = function () {
            console.log($scope.message);

            var jMessage = JSON.stringify($scope.message);
            // $scope.serverFormFeedback.$setPristine();

            console.log(typeof jMessage);

            //    Send file to the node server \
            $http({
                url: sendMessageURL,
                method: "POST",
                data: jMessage,
                headers: {'Content-Type': 'application/json'}
            })
                .then(function mySuccess(response) {
                    $scope.serverResponse = response.data;

                    // for(var i in $scope.serverResponse){
                    //     $scope.formError[i] = $scope.serverResponse[i];
                    // }

                    $scope.formError  = $scope.serverResponse;

                    $scope.serverFormFeedback = response.data;


                }, function myError(response) {
                    $scope.serverResponse = response.statusText;
                });
        }

    }])

    .controller('ShopController', ['$scope', function ($scope) {
        $scope.pageName = "Shop";

        $scope.message = "Wellcome to the shop!!!!!";
    }])

    .controller('AdminController', ['$scope', function ($scope) {
        $scope.pageName = 'Admin';
        $scope.wellcomeMessage = "Welcome to Admin Page!"
    }])

    .controller('RezidentialController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
        $scope.pageName = 'Rezidential';

        $scope.mainTitle = "Organize Your Home";
        $scope.mainSubtitle = "Indoor? Outdoor? If you’ve got stuff, we’ve got solutions.";
        $scope.bannerTitle = "Take Back The Man Cave";
        $scope.bannerCitat = "Whether you’re a neat freak or a pack rat, Hannibal has the shelving solution for you. If your basement needs some organizing, or your garage is too chaotic, the patented Metalsistem storage solutions can help.";
        $scope.highlights = dataFactory.getRezidentialHighs();
    }])

    .controller('ComercialController', ['$scope', function ($scope) {
        $scope.pageName = 'Comercial';
        $scope.wellcomeMessage = "Welcome to Comercial Page!"
    }])

    .controller('RetailController', ['$scope', function ($scope) {
        $scope.pageName = 'Retail';
        $scope.wellcomeMessage = "Welcome to Retail Page!"
    }])


;