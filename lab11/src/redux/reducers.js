const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_TO_CART':
      const objectDataStoreId = state.cart.findIndex((item) => item.objectData.id === action.payload.objectData.id);

      if (objectDataStoreId !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[objectDataStoreId].amount += action.payload.amount;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {

        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.objectData.id !== action.payload),
      };

    case 'INCREMENT_AMOUNT':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.objectData.id === action.payload) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        }),
      };

    case 'DECREMENT_AMOUNT':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.objectData.id === action.payload && item.amount > 1) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;