import { authAPI } from "../../API/api";

const _setUserData = 'SET_USER_DATA';
const _deleteUserData = "DELETE_USER_DATA";
const _setAuth = "SET_AUTH";

const initialState = {
    messages: [],
    email: null,
    login: null,
    isAuth: false,
    id: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case _setUserData: {
            return {
                ...state,
                ...action.payload
            }
        }
        case _setAuth: {
            return {
                ...state,
                isAuth: true,
                userId: action.payload
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
        }
    })
}

export const authMe = () => (dispatch) => {
    authAPI.authRequest().then( data  => {
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

export default authReducer;