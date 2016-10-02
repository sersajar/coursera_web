(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.emptyArray = false;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function(itemIndex){
      ShoppingListCheckOffService.buyItem(itemIndex);
      if (toBuy.items.length <= 0) {
        toBuy.emptyArray = true;
      };
    };

  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var listService = this;

    var boughtItems = [];
    var toBuyItems = [{name: "Eggs", quantity: 6},
                      {name: "Chocolate Cookies", quantity: 4},
                      {name: "Chicken Wings", quantity: 12},
                      {name: "Cereal Bars", quantity: 10},
                      {name: "Beer Bottles", quantity: 6}];

    //The toBuyItems array.
    listService.getToBuyItems = function(){
      return toBuyItems;
    };

    //The boughtItems array.
    listService.getBoughtItems = function(){
      return boughtItems;
    };

    //Function to add the item to boughtItems and remove from toBuyItems.
    listService.buyItem = function(itemIndex){
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };
  };


})();
