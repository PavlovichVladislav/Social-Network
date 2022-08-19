import user0 from '../../img/profile_img.jpg'
import user1 from '../../img/user1.jpg'
import user2 from '../../img/user2.jpg'

import { usersAPI } from '../../API/api';

const TOGGLE_FOLLOW = 'social-network/users/TOGGLE_FOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const TOGGLE_LOADING = 'social-network/users/TOGGLE_LOADING';
const TOGGLE_FOLLOWING = "social-network/users/TOGGLE_FOLLOWING";

const initialState = {
    users: [
        {
            id: 1, 
            name: 'Павлович Владислав',
            status: 'Новосибирск',
            photos: {small: user0},
            followed: true,

        },
        {
            id: 2, 
            name: 'Саакян Георгий',
            status: 'Саскян из НГСОХИ',
            photos: {small: user2},
            followed: true,
        },
        {
            id: 3, 
            name: 'Зубань Ярослав',
            status: 'В поиске шаловливых ощущений',
            photos: {small: user1},
            followed: true,
        },
        {
            id: 4, 
            name: 'Белов Ярослав',
            status: '',
            photos: {small: null},
            followed: true,
        }
    ],
    pageSize: 5,
    currentPage: 1,
    loading: false,
    following: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: !user.followed}
                    }

                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case TOGGLE_LOADING: {
            return {
                ...state,
                loading: !state.loading
            }
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                following: state.following.includes(action.payload)
                ? state.following.filter(id => id !== action.payload)
                : [...state.following, action.payload]
            }
        }
        default:
            return state;
    }

}

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, payload: userId});
export const setUsers = (users) => ({type: SET_USERS, payload: users});
export const setCurPage = (curPage) => ({type: SET_CURRENT_PAGE, payload: curPage});
export const toggleLoading = () => ({type: TOGGLE_LOADING});
export const toggleFollowingProcess = (userId) => ({type: TOGGLE_FOLLOWING, payload: userId});

export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleLoading());
    const response = await usersAPI.getUsers(page, pageSize);

    dispatch(setCurPage(page + 1));
    dispatch(toggleLoading());
    dispatch(setUsers(response.items));

}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProcess(userId));
    const response = await usersAPI.followRequest(userId);

    if (response.resultCode === 0) {
        dispatch(toggleFollow(userId));
    }
    
    dispatch(toggleFollowingProcess(userId));

}

export const unfollow = (userId) => async (dispatch) => {

    dispatch(toggleFollowingProcess(userId));
    const response = await usersAPI.unfollowRequest(userId);

    if (response.resultCode === 0) {
        dispatch(toggleFollow(userId));
    }

    dispatch(toggleFollowingProcess(userId));
}

export default usersReducer;

