import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import authReducer from "./Reducers/authReducer";
import messageReducer from "./Reducers/messageReducer";
import profileReducer from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";
import appReducer from "./Reducers/appReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;