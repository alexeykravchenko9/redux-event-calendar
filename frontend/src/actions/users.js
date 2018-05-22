import { MAKE_LOGOUT, CHECK_USER, MAKE_LOGIN, MAKE_LOGIN_FAIL } from "../constants/users";

import makeLogout from "../utils/makeLogout";
import makeLogin from "../utils/makeLogin";
import checkUser from "../utils/checkUser";



export const checkAuthUser = () => dispatch => {

     return checkUser().then( user => {


        if(Object.keys(user).length > 0) {
            const { id, username } = user.sessionUserID;
            dispatch({
                type: CHECK_USER,
                payLoad: { id, username }
            });
        } else {
            dispatch({
                type: CHECK_USER,
                payLoad: {}
            });
        }

    }).catch( e => console.error(e));
};

export const setLogin = (username, password) => dispatch => {

    return makeLogin(username, password).then(res => {

        if(res.meta.code !== 403) {
            const { id, username } = res.user;

            dispatch({
                type: MAKE_LOGIN,
                payLoad: { id, username }
            });

        } else {
            dispatch({
                type: MAKE_LOGIN_FAIL,
                payLoad: res.meta.message
            })
        }

        console.log(res, 'user makeLogin');



    }).catch(e => console.error(e));

};

export const setLogout = () => dispatch => {

    return makeLogout().then( res => {

       if (res.status === 200){
           dispatch({
               type: MAKE_LOGOUT
           })
       }

    }).catch(e => console.error(e));

};

