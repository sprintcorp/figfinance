import {CLEAR_ERRORS, GET_CATEGORIES_ACTION, GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST} from "../constants/Constant";
import axios from "axios";

export const getCategoriesAction = () => async(dispatch)=>{
  try{
    dispatch({type:GET_CATEGORIES_REQUEST});
    const {data} = await axios("/categories");
    dispatch({ type: GET_CATEGORIES_ACTION, payload: data });
  }catch (error){
    dispatch({
      type: GET_CATEGORIES_FAIL,
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
