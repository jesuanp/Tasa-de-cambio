import {
    ABBREVIATION_COINS,
    GET_CHANGE,
    GET_HISTORICAL,
} from '../../types';

const divisaReducer = (state, action) => {
    switch(action.type) {

        case ABBREVIATION_COINS: return {
            ...state,
            abbreviation: action.payload
        }

        case GET_CHANGE: return {
            ...state,
            coinchange: action.payload
        }

        case GET_HISTORICAL: return {
            ...state,
            coinchange: action.payload
        }
        
        default: return state;
    }
}

export default divisaReducer;
