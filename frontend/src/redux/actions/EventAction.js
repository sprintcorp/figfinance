import axios from "axios";
import {GET_EVENTS_ACTION, GET_EVENTS_REQUEST} from "../constants/EventConstant";


export const getEventsAction = () => async(dispatch)=>{
    try{
        dispatch({type:GET_EVENTS_REQUEST});
        const {data} = await axios('http://127.0.0.1:4000/api/events');
        dispatch({ type: GET_EVENTS_ACTION, payload: data });
        console.log(data);
    }catch (error){
        console.log(error);
    }

}
