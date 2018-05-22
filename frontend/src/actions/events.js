import { FETCH_ALL_EVENTS, ADD_EVENT, REMOVE_EVENT } from "../constants/events";
import { addEvent, fetchEvents, removeItem } from "../utils/crudEvents";

export const fetchAllEvents = () => dispatch => {

    fetchEvents().then( res => {
        console.log(res, 'res fetch all events');

       return dispatch({
            type: FETCH_ALL_EVENTS,
            payLoad: res
        })
    });

};

export const addEvents = (title, start, duration) => dispatch => {
    return addEvent(title, start, duration).then( res => {

        dispatch({
            type: ADD_EVENT
        });

        if(res.status === 201 ){
            fetchEvents().then( res => {
                return dispatch({
                    type: FETCH_ALL_EVENTS,
                    payLoad: res
                })
            });
        }
        return res;

    });
};

export const removeEventItem = (eventID) => dispatch => {

    return removeItem(eventID).then( res => {

        dispatch({
            type: REMOVE_EVENT
        });

        if(res.status === 200 ){
            fetchEvents().then( res => {
                return dispatch({
                    type: FETCH_ALL_EVENTS,
                    payLoad: res
                })
            });
        }
        return res;

    });

};