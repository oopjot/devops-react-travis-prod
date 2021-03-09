const addIngredient = (payload) => {
    return {
        type: 'ADD_INGREDIENT',
        payload
    };
};

const deleteIngredient = (payload) => {
    return {
        type: 'DELETE_INGREDIENT',
        payload
    };
};

export {
    addIngredient,
    deleteIngredient
}

