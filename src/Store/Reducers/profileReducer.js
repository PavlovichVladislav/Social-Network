import { photoAPI, profileAPI } from '../../API/api';

import camera_img from '../../icons/camera_25.png';
import like_img from '../../icons/like.svg';

import user1_img from '../../img/user1.jpg';
import user2_img from '../../img/user2.jpg';

import friend1_img from '../../icons/friends/friend_1.jpg';
import friend2_img from '../../icons/friends/friend_2.jpg';
import friend3_img from '../../icons/friends/friend_3.jpg';
import friend4_img from '../../icons/friends/friend_4.jpg';

const ADD_POST = 'social-network/posts/ADD_POST';
const SET_USER_PROFILE = 'social-network/posts/SET_USER_PROFILE';
const SET_STATUS ="social-network/posts/SET_STATUS";
const DELETE_POST = "social-network/posts/DELETE_POST";
const SET_USER_PHOTO = "social-network/posts/SET_USER_PHOTO";

const initialState = {
    postStore: [
        {
            name: 'Зубань Ярослав',
            img: user1_img,
            date: '9 апр 2011',
            text: 'Ахуенный парёнек, я бы загонял',
            likeCount: '7',
            id: 1,
            like: like_img
        },
        {
            name: 'Георгий Саакян',
            date: '25 мая 2011',
            img: user2_img,
            text: 'Согласен со словами выше',
            likeCount: '12',
            id: 2,
            like: like_img
        }, 
    ],
    friendsStore: [
        {
            img: friend1_img,
            name: 'Ярослав',
            id: 1,
        },
        {
            img: friend2_img,
            name: 'Георгий',
            id: 2,
        },
        {
            img: friend3_img,
            name: 'Ярослав',
            id: 3,
        },
        {
            img: friend4_img,
            name: 'Илья',
            id: 4,
        },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const newPost = {
                name: 'Владислав Павлович',
                img: state.profile.photos.small,
                date: `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`,
                text: action.payload,
                likeCount: 6,
                id: state.postStore.length + 1,
                like: like_img
            };
            
            return {
                ...state,
                postStore: [...state.postStore, newPost],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postStore: state.postStore.filter(post => post.id !== action.payload)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile: action.payload
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, ...action.payload}
            }
        }
        default: {
            return state;
        }

    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, payload: newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, payload: postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile });
export const setStatus = (status) => ({ type: SET_STATUS, payload: status });
export const setUserPhoto = (photos) => ({type: SET_USER_PHOTO, payload: photos});

export const getUserPage = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserPage(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const putUserPhoto = (photo) => async (dispatch) => {
    const response = await photoAPI.putUserPhoto(photo);

    if (response.resultCode === 0) {
        dispatch(setUserPhoto(response.data));
    }
}

export default profileReducer;
