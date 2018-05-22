import { FETCH_ALL_EVENTS, ADD_EVENT, REMOVE_EVENT } from "../constants/events";

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_EVENTS:
            return {...state, items: action.payLoad };
        case ADD_EVENT:
            return {...state };
        case REMOVE_EVENT:
            return {...state };
        default:
            return state;
    }
}


