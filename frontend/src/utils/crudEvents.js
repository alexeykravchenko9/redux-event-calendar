import { API_EVENTS } from "../constants/api";

export const fetchEvents = () => fetch(API_EVENTS, {
    method: 'GET',
    credentials: 'include'
}).then( res => res.json()).catch(e => console.error(e));

export const addEvent = (title, start, duration, owner) => fetch(API_EVENTS, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
        title, start, duration, owner
    })
}).then( res => res).catch(e => console.error(e));

export const removeItem = (eventID) => fetch(`${API_EVENTS}/${eventID}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include'
}).then( res => res).catch(e => console.error(e));