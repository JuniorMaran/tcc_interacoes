import { createStore } from 'redux';

var INITIAL_STATE = {
    data:  ["1",'2']
}

function drugs(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_DRUG':
            return { ...state, data : [...state.data, action.name] }
        default:
            return state;    
    }

}

const store = createStore(drugs);

export default store;
