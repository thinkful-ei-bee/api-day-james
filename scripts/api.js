const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/james';

    const getItems = function() {
        fetch(`${BASE_URL}/items`);
        //return Promise.resolve('A successful response!');
    }

    const createItem = function(name) {
        let newItem = {
            name,
        };
        return fetch(`${BASE_URL}/items`, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {'Content-Type': 'application/json' 
        },
            body: newItem
        });
    }

    return {
        getItems,
        createItem
    };

  })();