import { CURRENT_USER } from '../actions/users';

const initialState = {
    loggedUserID: ''
};

export default (state = initialState, action) => {
    switch (action.type){
        case CURRENT_USER:
            return {...state, loggedUserID: action.payLoad };
        default:
            return state;
    }
}

