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

api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.updateItem(item.id, { name: 'foobar' });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));

//fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
//.then(res => res.json())
//.then(data => console.log(data));
//store.items.push(Item.create('apples'));