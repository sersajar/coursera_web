(function () {
    'use strict'; //Strict mode makes it easier to write "secure" JavaScript.

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LCController);

    LCController.$inject = ['$scope'];
    function LCController($scope) {
        $scope.listOfDishes = "";
        $scope.tooMuch = function() {
            var dish = $scope.listOfDishes.trim().split(','); //used to create an array
            if (dish.length == 1 && dish[0] == '') {
                $scope.message = 'Please enter data first';
            }
            else if (dish.length < 4) {
                $scope.message = 'Enjoy!';
            }
            else {
                $scope.message = 'Too much!!';
            };
        };
    };
})();
