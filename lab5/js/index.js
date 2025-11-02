import {
    renderItemsList,
    clearInputs,
    getStones, 
    createStone, 
    updateStone, 
    deleteStone,
    getTotalPrice,
} from "./dom_util.js";

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("total_price");
const submitButton = document.getElementById("submit_button"); 

let currentSearchTerm = "";
let descendingSort = false;

function getQueryParams() {
    const params = {};
    if (currentSearchTerm) {
        params.search = currentSearchTerm;
    }
    params.sort = descendingSort ? 'desc' : 'asc'; 
    return params;
}

async function loadAndRenderStones() {
    try {
        const params = getQueryParams();
        
        const fetchedStones = await getStones(params); 
        
        renderItemsList(fetchedStones, handleEditStone, handleRemoveStone);

    } catch (error) {
        console.error("Failed to load stones with parameters:", error);
        alert("Не вдалося завантажити дані з сервера.");
    }
}

searchButton.addEventListener("click", () => {
    currentSearchTerm = findInput.value.trim();
    loadAndRenderStones();
});

clearButton.addEventListener("click", () => {
    clearInputs();
    currentSearchTerm = "";
    loadAndRenderStones();
});

sortSwitch.addEventListener("change", () => {
    descendingSort = sortSwitch.checked;
    loadAndRenderStones();
});

countButton.addEventListener("click", async () => {
    try {
        const params = getQueryParams();
        
        const total = await getTotalPrice(params); 
        
        totalPriceLabel.textContent = total.toFixed(2) + "$";
        
    } catch (error) {
        console.error("Помилка підрахунку загальної ціни.", error);
        totalPriceLabel.textContent = "Error";
    }
});

submitButton.addEventListener("click", async (e) => {
    e.preventDefault(); 

    const titleInput = document.getElementById("stone-select");
    const descriptionInput = document.getElementById("description_input");
    const expensesInput = document.getElementById("expenses_input");

    const newStoneData = { 
        title: titleInput.value, 
        description: descriptionInput.value, 
        price: expensesInput.value 
    };
    
    if (newStoneData.title && newStoneData.description && newStoneData.price) {
        try {
            await createStone(newStoneData); 
            
            loadAndRenderStones(); 
            
            titleInput.value = "";
            descriptionInput.value = "";
            expensesInput.value = "";
        } catch (error) {
            console.error("Помилка створення.", error);
        }
    } else {
        alert("Будь ласка, заповніть усі поля.");
    }
});

function handleEditStone(stone) {
    const newTitle = prompt("Edit Title:", stone.title);
    if (newTitle === null) return; 

    const newDescription = prompt("Edit Description:", stone.description);
    if (newDescription === null) return;

    const newPrice = prompt("Edit Price ($):", stone.price);
    if (newPrice === null) return;
    
    const updatedData = {
        title: newTitle,
        description: newDescription,
        price: newPrice,
    };

    performUpdate(stone.id, updatedData);
}

async function performUpdate(stoneId, updatedData) {
    try {
        await updateStone(stoneId, updatedData); 
        loadAndRenderStones();
    } catch (error) {
        console.error("Помилка оновлення.", error);
    }
}

async function handleRemoveStone(stoneId) {
    if (confirm(`Ви впевнені, що хочете видалити цей камінь?`)) {
        try {
            await deleteStone(stoneId); 
            loadAndRenderStones();
        } catch (error) {
            console.error("Помилка видалення.", error);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadAndRenderStones();
});