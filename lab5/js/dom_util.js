const BACKEND_BASE_URL = "http://localhost:3000/api/stones";

async function apiCall(url, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API Error (${method} ${url}): ${response.status}`, errorText);
    alert(`API Error: ${response.status} ${response.statusText}. Перевірте консоль.`);
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  if (response.status === 204) {
      return null; 
  }

  return response.json();
}

export async function getStones(params = {}) { 
    const query = new URLSearchParams(params).toString();
    const url = `${BACKEND_BASE_URL}${query ? '?' + query : ''}`;
    return apiCall(url, 'GET');
}

export async function createStone(newStoneData) { 
    return apiCall(BACKEND_BASE_URL, 'POST', newStoneData); 
}

export async function updateStone(id, updatedData) { 
    const url = `${BACKEND_BASE_URL}/${id}`;
    return apiCall(url, 'PUT', updatedData); 
}

export async function deleteStone(id) { 
    const url = `${BACKEND_BASE_URL}/${id}`;
    return apiCall(url, 'DELETE');
}

export async function getTotalPrice(params = {}) { 
    const query = new URLSearchParams(params).toString();
    const url = `${BACKEND_BASE_URL}/total-price${query ? '?' + query : ''}`;
    
    const result = await apiCall(url, 'GET');
    return result.total_price;
}

export const renderItemsList = (stoneArray, onEdit, onRemove) => {
    const itemsContainer = document.getElementById("items_container");
    itemsContainer.innerHTML = '';

    if (!itemsContainer) {
        console.error("items_container not found.");
        return;
    }

    stoneArray.forEach((stone) => {
        if (!stone.id) return; 

        const listItem = addItemToPage(stone, onEdit, onRemove);
        itemsContainer.appendChild(listItem);
    });
};

export const clearInputs = () => {
    const searchInput = document.getElementById("search_input");
    if (searchInput) {
        searchInput.value = "";
    }
};

export const addItemToPage = (stone, onEdit, onRemove) => {
    const listItem = document.createElement("li");
    listItem.setAttribute('data-stone-id', stone.id); 
    listItem.classList.add("first_stone", "col-md-2.5", "mt-2");
    
    listItem.innerHTML = `
        <div class="first_stone_item">
            <img class="first_stone_photo ml-1 mt-1" src="img/${stone.title}.jpg" height="130" width="185" alt="${stone.title}" onerror="this.onerror=null;this.src='img/Stone.jpg';">
            <h5 class="stone_title">${stone.title} </h5>
            <div class="stone_description">${stone.description} </div>
            <div class="stone_price ml-2 mt-2">${stone.price} $</div>
            <div class="edit-remove-buttons mt-3">
                <input class="edit-button" type="button" value="Edit"> 
                <input class="remove-button" type="button" value="Remove">
            </div>
        </div>
    `;

    const editButton = listItem.querySelector('.edit-button');
    const removeButton = listItem.querySelector('.remove-button');

    editButton.addEventListener('click', () => {
        onEdit(stone);
    });

    removeButton.addEventListener('click', () => {
        onRemove(stone.id);
    });

    return listItem;
};