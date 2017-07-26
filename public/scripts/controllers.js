'use strict';

angular.module('mgmApp')
    .constant("sendMessageURL", "http://localhost:3000/send-message")

    .controller('IndexController', ['$scope', 'dataFactory', 'sendMessageURL', '$http', function ($scope, dataFactory, sendMessageURL, $http) {
        $scope.products = dataFactory.getProducts();
        $scope.nr = 1;
        $scope.nm = 0;
        $scope.highlights = dataFactory.getHighlights();

        $scope.message = {'name': '', 'email': '', 'phone': '', 'message': ''};
        $scope.serverFormFeedback = {'name': true, 'email': true, 'phone': true, 'message': true};

        $scope.sendMessage = function () {
            console.log($scope.message);

            var jMessage = JSON.stringify($scope.message);

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

                    // for(var i in $scope.message){
                    //     if (response.data[i] == false){
                    //         $scope.message[i] = '';
                    //     }
                    // }

                    $scope.serverFormFeedback = response.data;

                }, function myError(response) {
                    $scope.serverResponse = response.statusText;
                });
        }

    }])


    .controller('ShopController', ['$scope', function ($scope) {
        $scope.message = "Wellcome to the shop!!!!!"
    }])
;