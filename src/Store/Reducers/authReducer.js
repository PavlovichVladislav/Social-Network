import { authAPI } from "../../API/api";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const SET_AUTH = "social-network/auth/SET_AUTH";
const SET_AUTH_ERROR ="social-network/auth/SET_AUTH_ERROR";

const initialState = {
    email: null,
    login: null,
    isAuth: false,
    id: null,
    authError: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                authError: false
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                isAuth: true,
                userId: action.payload,
                authError: false
            }
        }
        case SET_AUTH_ERROR: {
            return {
                ...state,
                authError: true
            }
        }
        default:
            return state;
    }
}

export const setUserData = ({email, login, id}, auth) => {  
    return {
        type: SET_USER_DATA,
        payload: {
            email,
            login,
            isAuth: auth,
            id
        }
    }
}

export const setAuth = (userId) => ({ type: SET_AUTH, payload: userId });

export const setAuthError = () => ({ type: SET_AUTH_ERROR });

export const login = (authData) => async (dispatch) => {
    const response = await authAPI.login(authData);

    if (response.resultCode === 0) {
        dispatch(setAuth(response.data.userId))
        dispatch(authMe());
    } else if (response.resultCode === 1) {
        dispatch(setAuthError());
    }

}

export const authMe = () => async (dispatch) => {
    const response = await authAPI.authRequest();

    if (response.resultCode === 0) {
        dispatch(setUserData({...response.data}, true));
    }
}

export const logOut = () => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setUserData({
            messages: null, 
            email: null, 
            login: null, 
            id: null
        }, false));
    }
}

export default authReducer;