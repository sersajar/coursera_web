;(function(){
	'use strict'

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {
		$scope.listOfDishes = "";
		$scope.tooMuch = function () {
			var dish = $scope.listOfDishes.trim().split(','); // used to create and array from the string, separated by comas
			if (dish.length == 1 && dish[0] == '') {
				$scope.message = 'Please enter data first';
			} else if (dish.length < 4) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!!";
			};
		};

	};

})();
