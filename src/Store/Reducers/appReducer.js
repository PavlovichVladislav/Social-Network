import { authMe } from "./authReducer";

const SET_INITIALIZED = "social-network/app/SET_INITIALIZED";

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default: 
            return state
    }
}

export const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        });
    
}

export default appReducer;