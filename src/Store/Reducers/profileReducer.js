import camera_img from '../../icons/camera_25.png';
import like_img from '../../icons/like.svg';

import user1_img from '../../img/user1.jpg';
import user2_img from '../../img/user2.jpg';

import friend1_img from '../../icons/friends/friend_1.jpg';
import friend2_img from '../../icons/friends/friend_2.jpg';
import friend3_img from '../../icons/friends/friend_3.jpg';
import friend4_img from '../../icons/friends/friend_4.jpg';

const addPost = 'ADD-POST';
const changePost = 'CHANGE-POST';

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
    newPostText: '',
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
    ]
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case addPost: {
            let newPost = {
                name: 'Владислав Павлович',
                img: camera_img,
                date: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`,
                text: state.newPostText,
                likeCount: 6,
                id: 3,
                like: like_img
            };
            
            const stateCopy = {...state};
            stateCopy.postStore = [...state.postStore];
            stateCopy.postStore.push(newPost);
            stateCopy.newPostText = '';
            
            return stateCopy;
        }
        case changePost: {
            const stateCopy = {...state};
            stateCopy.newPostText = action.payload;

            return stateCopy;
        }
        default: {
            console.log('invalid action creator name');
            break;
        }

    }

    return state;
}

export const addPostActionCreator = () => ({type: addPost});
    
export const changePostActionCreator = (value) => {
    return {
        type: changePost,
        payload: value
    }
}
