// const initialState = {
//   cart: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case 'ADD_TO_CART':
//       const objectDataStoreId = state.cart.findIndex(
//         (item) =>
//           item.objectData.id === action.payload.objectData.id &&
//           item.objectData.selectedColor === action.payload.objectData.selectedColor
//       );

//       if (objectDataStoreId !== -1) {
//         const updatedCart = [...state.cart];
//         updatedCart[objectDataStoreId].amount += action.payload.amount;

//         return {
//           ...state,
//           cart: updatedCart,
//         };
//       } else {
//         return {
//           ...state,
//           cart: [...state.cart, action.payload],
//         };
//       }

//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cart: state.cart.filter(
//           (item) => item.objectData.id !== action.payload
//         ),
//       };

//     case 'INCREMENT_AMOUNT':
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.objectData.id === action.payload
//             ? { ...item, amount: item.amount + 1 }
//             : item
//         ),
//       };

//     case 'DECREMENT_AMOUNT':
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.objectData.id === action.payload && item.amount > 1
//             ? { ...item, amount: item.amount - 1 }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export default cartReducer;



const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.objectData.id === action.payload.objectData.id &&
          item.objectData.selectedColor === action.payload.objectData.selectedColor
      );

      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].amount += action.payload.amount;

        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item.objectData.id === action.payload.id &&
              item.objectData.selectedColor === action.payload.selectedColor
            )
        ),
      };

    case 'INCREMENT_AMOUNT':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.objectData.id === action.payload.id &&
          item.objectData.selectedColor === action.payload.selectedColor
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case 'DECREMENT_AMOUNT':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.objectData.id === action.payload.id &&
          item.objectData.selectedColor === action.payload.selectedColor &&
          item.amount > 1
            ? { ...item, amount: item.amount - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
