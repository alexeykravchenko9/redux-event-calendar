import { CHECK_USER, MAKE_LOGOUT, MAKE_LOGIN, MAKE_LOGIN_FAIL} from '../constants/users';

const initialState = {
    loggedUser: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type){
        case MAKE_LOGIN:
            return {...state, loggedUser: action.payLoad};
        case MAKE_LOGIN_FAIL:
            return {...state, loggedUser: {}, error: action.payLoad };
        case CHECK_USER:
            return {...state, loggedUser: action.payLoad };
        case MAKE_LOGOUT:
            return {...state, loggedUser: {}};
        default:
            return state;
    }
}

