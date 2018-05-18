import { FETCH_ALL_EVENTS } from "../actions/events";

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_EVENTS:
            return {...state, items: action.payLoad };
        default:
            return state;
    }
}


