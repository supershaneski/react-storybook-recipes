import { createStore, combineReducers } from 'redux';

const addRecipe = (state, action) => {
    const items = state.items.slice(0);
    items.push(action.payload);
    return {
        ...state,
        items: items,
    }
}

const initialData = () => {
    return {
        items: [],
    }
}

const recipes = (state = initialData(), action) => {
    switch(action.type) {
        case 'ADD_RECIPE':
            return addRecipe(state, action)
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    recipes,
})

export default createStore(rootReducer);