import { usersAPI } from "../../API/api";

const _setUserData = 'SET_USER_DATA';
const _logOut ="LOG_OUT";

const initialState = {
    messages: [],
    data: {
      id: null,
      email: null,
      login: null
    },
    loading: true,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case _setUserData: {
            return {
                ...state,
                messages: [...action.payload.messages],
                data: {...action.payload.data},
                isAuth: true
            }
        }
        case _logOut: {
            return {
                ...state,
                isAuth: false,
            }
        }
        default:
            return state;
    }
}

export const logIn = () => (dispatch) => {
    usersAPI.authRequest().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(data));
        }
    })
}

export const setUserData = (data) => {  
    return {
        type: _setUserData,
        payload: {
            messages: data.messages,
            data: data.data,
        }
    }
}

export const logOut = () => ({type: _logOut})

export default authReducer;