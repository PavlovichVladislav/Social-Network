import {combineReducers, createStore} from "redux";

import authReducer from "./Reducers/authReducer";
import { messageReducer } from "./Reducers/messageReducer";
import { profileReducer } from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers);

window.store = store;

export default store;