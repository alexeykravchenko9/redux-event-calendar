import { API_LOGOUT_URL } from "../constants/api";

export default () => fetch(API_LOGOUT_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    }
}).then( res => res ).catch(e => {});