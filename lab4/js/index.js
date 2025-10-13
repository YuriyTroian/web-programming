import {
  renderItemsList,
  clearInputs,
  stones,
  addItemToPage,
  createEditForm,
} from "./dom_util.js";

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("total_price");
const submitButton = document.getElementById("submit_button");

let descendingSort = false;
let filteredStones = [...stones]; 

function sortStonesByPrice(stonesToSort) {
  return stonesToSort.slice().sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return descendingSort ? priceB - priceA : priceA - priceB;
  });
}

function updateDisplayedStones() {
  const sorted = sortStonesByPrice(filteredStones);
  renderItemsList(sorted);
}

searchButton.addEventListener("click", () => {
  const searchTerm = findInput.value.toLowerCase().trim();
  const words = searchTerm.split(/\s+/);

  filteredStones = stones.filter((stone) => {
    const stoneTitle = stone.title.toLowerCase();
    const stoneDescription = stone.description.toLowerCase();
    const combinedText = `${stoneTitle} ${stoneDescription}`;
    return words.every((word) => combinedText.includes(word));
  });

  updateDisplayedStones();
});

clearButton.addEventListener("click", () => {
  clearInputs();
  filteredStones = [...stones];
  updateDisplayedStones();
});

sortSwitch.addEventListener("change", () => {
  descendingSort = sortSwitch.checked;
  updateDisplayedStones();
});

countButton.addEventListener("click", () => {
  const displayedStones = document.querySelectorAll(".first_stone");
  let total = 0;
  displayedStones.forEach((stone) => {
    const stonePriceElement = stone.querySelector(".stone_price");
    if (stonePriceElement) {
      const stonePriceText = stonePriceElement.textContent.trim();
      const stonePrice = parseFloat(stonePriceText.replace("$", ""));
      if (!isNaN(stonePrice)) total += stonePrice;
    }
  });
  totalPriceLabel.textContent = total + "$";
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); 

  const titleInput = document.getElementById("stone-select");
  const descriptionInput = document.getElementById("description_input");
  const expensesInput = document.getElementById("expenses_input");

  const title = titleInput.value;
  const description = descriptionInput.value;
  const price = expensesInput.value;

  if (title && description && price) {
    const newStone = {
      title,
      description,
      price,
    };

    stones.push(newStone);
    filteredStones = [...stones]; 
    updateDisplayedStones();

    titleInput.value = "";
    descriptionInput.value = "";
    expensesInput.value = "";
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  updateDisplayedStones();
});
