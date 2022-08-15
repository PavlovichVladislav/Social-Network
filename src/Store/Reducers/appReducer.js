import { authMe } from "./authReducer";

const _setInitialized = "SET_INITIALIZED";

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case _setInitialized: {
            return {
                ...state,
                initialized: true
            }
        }
        default: 
            return state
    }
}

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        });
    
}

export const setInitialized = () => ({type: _setInitialized});

export default appReducer;