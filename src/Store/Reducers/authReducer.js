import { authAPI } from "../../API/api";

const _setUserData = 'SET_USER_DATA';
const _logOut = "LOG_OUT";
const _setAuth = "SET_AUTH";

const initialState = {
    messages: [],
    data: {
      id: null,
      email: null,
      login: null
    },
    loading: true,
    isAuth: false,
    userId: null
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
        case _setAuth: {
            return {
                ...state,
                isAuth: true,
                userId: action.payload
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

export const login = (authData) => (dispatch) => {
    authAPI.login(authData)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuth(data.data.userId))
        }
    })
    .then(
        authAPI.authRequest().then( data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data));
            }
        })
    )
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

export const setAuth = (userId) => {
    return {
        type: _setAuth,
        payload: userId
    }
}

export const logOut = () => ({type: _logOut})

export default authReducer;