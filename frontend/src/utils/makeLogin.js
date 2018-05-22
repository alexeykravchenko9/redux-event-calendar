import { API_LOGIN_URL } from "../constants/api";


export default (username, password) => fetch(API_LOGIN_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username,
        password
    })
}).then( res => res.json() );