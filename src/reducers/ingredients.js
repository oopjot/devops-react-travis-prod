const ingredient = (state, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return {
                id: action.payload.id,
                name: action.payload.name
            };
        default:
            return state;
    };
};

const ingredients = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return [
                ...state,
                ingredient(undefined, action)
            ]
        case 'REMOVE_INGREDIENT':
            return state.filter(i => i.id !== action.payload.id)
        
        default:
            return state;
    };
};

export default ingredients;