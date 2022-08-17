import { profileAPI } from '../../API/api';

import camera_img from '../../icons/camera_25.png';
import like_img from '../../icons/like.svg';

import user1_img from '../../img/user1.jpg';
import user2_img from '../../img/user2.jpg';

import friend1_img from '../../icons/friends/friend_1.jpg';
import friend2_img from '../../icons/friends/friend_2.jpg';
import friend3_img from '../../icons/friends/friend_3.jpg';
import friend4_img from '../../icons/friends/friend_4.jpg';

const _addPost = 'ADD-POST';
const _setUserProfile = 'SET_USER_PROFILE';
const _setStatus ="SET_STATUS";
const _deletePost = "DELETE_POST";

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
        },
        {
            img: friend2_img,
            name: 'Ярослав',
        },
        {
            img: friend3_img,
            name: 'Георгий',
        },
        {
            img: friend4_img,
            name: 'Илья'
        },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case _addPost: {
            const newPost = {
                name: 'Владислав Павлович',
                img: camera_img,
                date: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`,
                text: action.payload,
                likeCount: 6,
                id: 3,
                like: like_img
            };
            
            return {
                ...state,
                postStore: [...state.postStore, newPost],
            };
        }
        case _deletePost: {
            return {
                ...state,
                postStore: state.postStore.filter(post => post.id !== action.payload)
            }
        }
        case _setUserProfile: {
            return {
                ...state, 
                profile: action.payload
            }
        }
        case _setStatus: {
            return {
                ...state,
                status: action.payload
            }
        }
        default: {
            break;
        }

    }

    return state;
}

export const getUserPage = (userId) => (dispatch) => {
    profileAPI.getUserPage(userId)
    .then(data => {
        dispatch(setUserProfile(data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(data => {
        dispatch(setStatus(data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export const addPost = (newPostText) => ({type: _addPost, payload: newPostText});
export const deletePost = (postId) => ({type: _deletePost, payload: postId});
export const setUserProfile = (profile) => ({type: _setUserProfile, payload: profile});
export const setStatus = (status) => ({type: _setStatus, payload: status});

export default profileReducer;
