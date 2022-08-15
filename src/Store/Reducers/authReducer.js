import { authAPI } from "../../API/api";

const _setUserData = 'SET_USER_DATA';
const _setAuth = "SET_AUTH";
const _setAuthError ="SET_AUTH_ERROR";

const initialState = {
    messages: [],
    email: null,
    login: null,
    isAuth: false,
    id: null,
    authError: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case _setUserData: {
            console.log(action.payload);
            return {
                ...state,
                ...action.payload,
                authError: false
            }
        }
        case _setAuth: {
            return {
                ...state,
                isAuth: true,
                userId: action.payload,
                authError: false
            }
        }
        case _setAuthError: {
            return {
                ...state,
                authError: true
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
            dispatch(authMe());
        } else if (data.resultCode === 1) {
            dispatch(setAuthError());
        }
    })
}

export const authMe = () => (dispatch) => {
    return authAPI.authRequest().then( data  => {
        if (data.resultCode === 0) {
            dispatch(setUserData({...data, ...data.data}, true));
        }
    })
}

export const logOut = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserData({
                    messages: null, 
                    email: null, 
                    login: null, 
                    id: null
                }, false));
            }
        })
}

export const setUserData = ({messages, email, login, id}, auth) => {  
    return {
        type: _setUserData,
        payload: {
            messages,
            email,
            login,
            isAuth: auth,
            id
        }
    }
}

export const setAuth = (userId) => {
    return {
        type: _setAuth,
        payload: userId
    }
}

export const setAuthError = () => {
    return {
        type: _setAuthError
    }
}

export default authReducer;