;(function(){
	'use strict'

	// NarrowItDownApp Module

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective)
	.component('foundItems', {
	    templateUrl: 'founditems.html',
	    controller: FoundItemsComponentController,
	    bindings: {
			items: '<',
			title: '@title',
			onRemove: '&'
	    	}
    	});

	// Narrow Controller
	NarrowItDownController.$inject = ['$rootScope', 'MenuSearchService'];

	function NarrowItDownController ($rootScope, MenuSearchService) {
		var menu = this;

		menu.searchedBy = false;
		menu.search = "";
		menu.found = [];

		menu.showEmptyMessage = function () {
			return (menu.searchedBy && menu.found.length === 0);
		};

		menu.getMenuItems = function (searchTerm) {
			menu.searchedBy = true;

			if (menu.search === "") {
				menu.found = [];
				return;
			}

			$rootScope.$broadcast('founditems: processing', {on: true});
			var promise = MenuSearchService.getMatchedMenuItems(menu.search);

			promise.then(function (result) {
				menu.found = result;
			}).finally(function () {
				$rootScope.$broadcast('founditems: processing', {on: false});
			});
		};

		menu.removeMenuItem = function (index) {
			menu.found.splice(index, 1);
		};
	};

	// Menu Search Service



	// Found Items Directive


	// Found Items Component Controller
	function FoundItemsComponentController() {
		var $ctrl = this;

		$ctrl.remove = function(index) {
	    	$ctrl.onRemove({ index: index });
		};
    }


})();
