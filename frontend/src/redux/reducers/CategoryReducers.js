import {GET_CATEGORIES_ACTION, GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, CLEAR_ERRORS} from "../constants/Constant";

export const categoryReducers = (state={events:[]},action) =>{
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { loading: true, categories: [] };
    case GET_CATEGORIES_ACTION:
      return {
        loading: false,
        categories: action.payload.data,
      };
    case GET_CATEGORIES_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return {...state,error: null}
    default:
      return state;
  }
}
