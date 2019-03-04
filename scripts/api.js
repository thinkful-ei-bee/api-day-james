const api = (function() {
    const BASE_URL = ('https://thinkful-list-api.herokuapp.com/jjammess');\

    function getItems() {
        return fetch(`${BASE_URL}/items`);
        //return Promise.resolve('A successful response!');
    }

    function createItem(name) {
        let newItem = {
            name,
        };
        return fetch(`${BASE_URL}/items`, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: new Headers({'Content-Type': 'application/json' 
            }),
            body: newItem
        });
    }

    function updateItem(id, updateData) {
        return fetch(`${BASE_URL}/items/${id}`,{
          method: 'PATCH',
          headers: new Headers({'Content-Type': 'application/json'
          }),
          body: JSON.stringify(updateData)
        });
    }

    return {
        getItems,
        createItem,
        updateItem
    };

  })();