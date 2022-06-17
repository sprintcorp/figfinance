import {CLEAR_ERRORS, GET_EVENT_FAIL, GET_EVENTS_ACTION, GET_EVENTS_REQUEST} from "../constants/Constant";

export const eventReducers = (state={events:[]},action) =>{
    switch (action.type) {
        case GET_EVENTS_REQUEST:
            return { loading: true, events: [] };
        case GET_EVENTS_ACTION:
            return {
                loading: false,
                events: action.payload.data,
            };
        case GET_EVENT_FAIL:
            return { loading: false, error: action.payload };
        case CLEAR_ERRORS:
            return {...state,error: null}
        default:
            return state;
    }
}
