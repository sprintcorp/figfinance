import {
	CLEAR_ERRORS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from "../constants/Constant";

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		case CLEAR_ERRORS:
			return {...state,error: null}
		default:
			return state;
	}
};

// LOGIN
export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true ,isAuthenticated:false};
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload,isAuthenticated:true };
		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload, isAuthenticated:false };
		case USER_LOGOUT:
			return {};
		case CLEAR_ERRORS:
			return {...state,error: null}
		default:
			return state;
	}
};
