import { MAKE_LOGOUT, USER_LOGGED } from "../constants/users";
import setLogout from "../utils/setLogout";


export const setUser = (user) => {
    const { _id: id, username } = user;
    return {
        type: USER_LOGGED,
        payLoad: { id, username }
    }

};

export const makeLogout = () => dispatch => {

    return setLogout().then( res => {

       if (res.status === 200){
           dispatch({
               type: MAKE_LOGOUT
           })
       }

    }).catch(e => console.error(e));

};

