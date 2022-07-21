import {combineReducers, createStore} from "redux";

import { messageReducer } from "./Reducers/messageReducer";
import { profileReducer } from "./Reducers/profileReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
})

const store = createStore(reducers);

window.store = store;

export default store;