import axios from "axios";
import {
    GET_EVENT_FAIL,
    GET_EVENTS_ACTION,
    GET_EVENTS_REQUEST,
    CLEAR_ERRORS
} from "../constants/Constant";
import {BACKEND_URL} from "../../server";


export const getEventsAction = () => async(dispatch)=>{
    try{
        dispatch({type:GET_EVENTS_REQUEST});
        const {data} = await axios(BACKEND_URL+"/events");
        dispatch({ type: GET_EVENTS_ACTION, payload: data });
    }catch (error){
        dispatch({
            type: GET_EVENT_FAIL,
            payload:
              error && error.code === 'ERR_NETWORK'
                ? error.message
                : error.message,
        });
    }
}

export const getEventsByCategory = (search) => async(dispatch)=>{
    try{
        dispatch({type:GET_EVENTS_REQUEST});
        const {data} = await axios(BACKEND_URL+"/events/filter?category="+search);
        dispatch({ type: GET_EVENTS_ACTION, payload: data });
    }catch (error){
        dispatch({
            type: GET_EVENT_FAIL,
            payload:
              error && error.code === 'ERR_NETWORK'
                ? error.message
                : error.message,
        });
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type:  CLEAR_ERRORS
    })
}

