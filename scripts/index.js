/* global shoppingList, store */
'use strict';
$(document).ready(function() {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
  shoppingList.bindEventListeners();
  shoppingList.render();
});

//store.items.push(Item.create('apples'));