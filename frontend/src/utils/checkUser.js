import { API_GENERAL } from "../constants/api";

export default () => fetch(API_GENERAL, {
       method: 'GET',
       credentials: 'include',
       headers: {
           'Content-Type': 'application/json'
       }
    }).then( res => res.json() ).catch(e => {});