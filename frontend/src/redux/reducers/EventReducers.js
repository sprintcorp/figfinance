import {GET_EVENT_FAIL, GET_EVENTS_ACTION, GET_EVENTS_REQUEST} from "../constants/EventConstant";

export const eventReducers = (state={events:[]},action) =>{
    switch (action.type) {
        case GET_EVENTS_REQUEST:
            return { loading: true, events: [] };
        case GET_EVENTS_ACTION:
            return {
                loading: false,
                // pages: action.payload.pages,
                // page: action.payload.page,
                // products: action.payload.products,
            };
        case GET_EVENT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
