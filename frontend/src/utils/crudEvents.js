import { API_EVENTS } from "../constants/api";

export const fetchEvents = () => fetch(API_EVENTS, {
    method: 'GET',
    credentials: 'include'
}).then( res => res.json());