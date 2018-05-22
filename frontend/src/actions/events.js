import { FETCH_ALL_EVENTS } from "../constants/events";
import { fetchEvents } from "../utils/crudEvents";

export const fetchAllEvents = () => dispatch => {

    fetchEvents().then( res => {
        console.log(res, 'res fetch all events');

       return dispatch({
            type: FETCH_ALL_EVENTS,
            payLoad: res
        })
    });

};
