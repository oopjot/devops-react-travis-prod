const addPizza = (payload) => {
    return {
        type: 'ADD_PIZZA',
        payload
    };
};

const deletePizza = (payload) => {
    return {
        type: 'DELETE_PIZZA',
        payload
    };
};

export {
    addPizza,
    deletePizza
};
