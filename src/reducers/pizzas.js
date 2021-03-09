const pizza = (state, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            return {
                id: action.payload.id,
                name: action.payload.name,
                ingredients: action.payload.ingredients,
                dough: action.payload.dough
            };
        default:
            return state;
    };
};

const pizzas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            return [
                ...state,
                pizza(undefined, action)
            ];
        case 'DELETE_PIZZA':
            return state.filter(p => p.id !== action.payload.id)
        default:
            return state;
    };
};

export default pizzas;