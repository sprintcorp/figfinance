import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS
} from "../constants/Constant";
import axios from "axios";
import {BACKEND_URL} from "../../server";

// LOGIN
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

		const { data } = await axios.post(`/api/login`, { email, password }, config);
		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		// localStorage.setItem("userInfo", JSON.stringify(data));

	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.error
					? error.response.data.error
					: error.message,
		});

	}
};

// REGISTER
export const register = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(`/api/register`,{ email, password },config);
		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
		// localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.error
					? error.response.data.error
					: error.message,
		});
	}
};

export const logout = () => {
	localStorage.removeItem("userInfo");
}
