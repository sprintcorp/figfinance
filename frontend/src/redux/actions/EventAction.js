import axios from "axios";
import {GET_EVENT_FAIL, GET_EVENTS_ACTION, GET_EVENTS_REQUEST} from "../constants/EventConstant";
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
