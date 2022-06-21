import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { eventReducers } from "./reducers/EventReducers";
import {categoryReducers} from "./reducers/CategoryReducers";
import {userLoginReducer, userRegisterReducer} from "./reducers/UserReducer";

const reducer = combineReducers({
    eventList: eventReducers,
    categoryList: categoryReducers,
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer,
});


const initialState = {};

const middleware = [thunk];


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
