export const stones = [
  {
    title: "Diamond",
    description: "It is a beautiful jewelry stone",
    price: "1000",
  },
  {
    title: "Rubin",
    description: "It is a beautiful jewelry stone",
    price: "800",
  },
  {
    title: "Smaragd",
    description: "It is a beautiful jewelry stone",
    price: "900",
  },
];

export const renderItemsList = (stoneArray) => {
  const itemsContainer = document.getElementById("items_container");
  itemsContainer.innerHTML = '';

  stoneArray.forEach((stone) => {
    const listItem = addItemToPage(stone);
    itemsContainer.appendChild(listItem);
  });
};

export const clearInputs = () => {
  const searchInput = document.getElementById("search_input");
  searchInput.value = "";
};

export const addItemToPage = (stone) => {
  const listItem = document.createElement("li");
  listItem.classList.add("first_stone", "col-md-2.5", "mt-2");
  listItem.innerHTML = `
    <div class="first_stone_item">
      <img class="first_stone_photo ml-1 mt-1" src="img/${stone.title}.jpg" height="130" width="185" alt="${stone.title}">
      <h5 class="stone_title">${stone.title} </h5>
      <div class="stone_description">${stone.description} </div>
      <div class="stone_price ml-2 mt-2">${stone.price} $</div>
      <div class="edit-remove-buttons mt-3">
        <input class="edit-button" type="button" value="Edit"> <input class="remove-button" type="button" value="Remove">
      </div>
    </div>
  `;
  return listItem;
};

export function createEditForm(stone, onSave) {
  const editForm = document.createElement("div");
  editForm.classList.add("edit-form");
  editForm.innerHTML = `
    <h3>Edit Stone</h3>
    <label for="edit-title">Title:</label>
    <input type="text" id="edit-title" value="${stone.title}">
    <label for="edit-description">Description:</label>
    <input type="text" id="edit-description" value="${stone.description}">
    <label for="edit-price">Price:</label>
    <input type="number" id="edit-price" value="${stone.price}">
    <button id="submit-edit">Submit Changes</button>
  `;

  const submitEditButton = editForm.querySelector("#submit-edit");
  submitEditButton.addEventListener("click", () => {
    const editedTitle = editForm.querySelector("#edit-title").value;
    const editedDescription = editForm.querySelector("#edit-description").value;
    const editedPrice = editForm.querySelector("#edit-price").value;

    const updatedStone = {
      title: editedTitle,
      description: editedDescription,
      price: editedPrice,
    };

    onSave(updatedStone);
    editForm.remove();
  });

  return editForm;
}