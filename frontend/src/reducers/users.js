import { USER_LOGGED, MAKE_LOGOUT } from '../constants/users';

const initialState = {
    loggedUser: {}
};

export default (state = initialState, action) => {
    switch (action.type){
        case USER_LOGGED:
            return {...state, loggedUser: action.payLoad };
        case MAKE_LOGOUT:
            return {...state, loggedUser: {}};
        default:
            return state;
    }
}

