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

//const item = store.items[0];
//console.log('current name: ' + item.name);
//store.findAndUpdate(item.id, { name: 'foobar' });
//console.log('new name: ' + item.name);

//store.items.push(Item.create('apples'));