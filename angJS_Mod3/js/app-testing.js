;(function(){
	'use strict'

	// NarrowItDownApp Module

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownAppController', NarrowItDownAppController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective)
	.constant('ApiBasePath', 'htpps://davids-restaurant.herokuapp.com');


	// Narrow Controller

	NarrowItDownAppController.$inject = ['MenuSearchService'];

	function NarrowItDownAppController (MenuSearchService) {
		var list = this;

		list.narrow = function () {
			if (list.searchTerm == undefined || (list.searchTerm != undefined && list.searchTerm.length == 0)) {
				list.found = [];
			} else {
				var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

				promise.then(function (result) {
					list.found = result;
				}).catch(function (error) {
					console.log(error);
				});
			};
		};

		list.removeItem = function (itemIndex) {
			list.found.splice(itemIndex, 1);
		};
	};


	// Menu Search Service

	MenuSearchService.inject = ["$http", 'ApiBasePath'];

	function MenuSearchService ($http, ApiBasePath) {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			}).then(function (result) {

				/* keep only items that match*/
				var menuItems = result.data.menu_items;
				var foundItems = [];
				var index;
				for (index in menuItems) {
					if (menuItems[index].description.includes(searchTerm)) {
						foundItems.push(menuItems[index]);
					}
				}

				// return processed items
				return foundItems;
			}).catch(function (error){
				console.log(error);
			});
		};
	};

	// Found Items Directive
	function FoundItemsDirective () {
		var ddo = {
			templateUrl: 'foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'},
			controller: FoundItemsDirectiveController,
			controllerAs: 'foundList',
			bindToController: true
		};

		return ddo;
	};

	// Found Items Directive Controller

	function FoundItemsDirectiveController () {
		var foundList = this;

		foundList.isEmpty = function () {
			return foundList.items != undefined && foundList.items.length == 0;
		}
	}


})();
