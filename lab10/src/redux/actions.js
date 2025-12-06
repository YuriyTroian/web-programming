export const addToCart = (objectData, amount) => ({
    type: 'ADD_TO_CART',
    payload: {
        objectData,
        amount,
    },
});

export const removeFromCart = (objectDataId) => ({
    type: 'REMOVE_FROM_CART',
    payload: objectDataId,
});

export const incrementAmount = (objectDataId) => ({
    type: 'INCREMENT_AMOUNT',
    payload: objectDataId,
  });

  export const decrementAmount = (objectDataId) => ({
    type: 'DECREMENT_AMOUNT',
    payload: objectDataId,
  });