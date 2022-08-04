import {combineReducers, createStore} from "redux";

import { messageReducer } from "./Reducers/messageReducer";
import { profileReducer } from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

window.store = store;

export default store;