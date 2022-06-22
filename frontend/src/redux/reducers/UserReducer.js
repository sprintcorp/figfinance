import {
	CLEAR_ERRORS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL
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
export const userLoginReducer = (state = {userInfo = {}}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
		case LOAD_USER_REQUEST:
			return { loading: true ,isAuthenticated:false, userInfo: {}};
		case USER_LOGIN_SUCCESS:
		case LOAD_USER_SUCCESS:
			return { loading: false, userInfo: action.payload, isAuthenticated:true };
		case USER_LOGIN_FAIL:
		case LOAD_USER_FAIL:
			return { loading: false, error: action.payload, userInfo: null, isAuthenticated:false };
		case USER_LOGOUT:
			return {};
		case CLEAR_ERRORS:
			return {...state,error: null}
		default:
			return state;
	}
};
