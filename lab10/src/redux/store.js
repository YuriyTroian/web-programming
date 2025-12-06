import { createStore } from "redux";
import cartReducer from "./reducers";


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from localStorage", e);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (e) {
        console.warn("Could not save state to localStorage", e);
    }
};

const persistedState = loadState();

const store = createStore(
    cartReducer,
    persistedState 
);


store.subscribe(() => {
    saveState(store.getState());
});


export default store;