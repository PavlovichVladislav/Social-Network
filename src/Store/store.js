import user1_img from '../img/user1.jpg';
import user2_img from '../img/user2.jpg';

import friend1_img from '../icons/friends/friend_1.jpg';
import friend2_img from '../icons/friends/friend_2.jpg';
import friend3_img from '../icons/friends/friend_3.jpg';
import friend4_img from '../icons/friends/friend_4.jpg';
import camera_img from '../icons/camera_25.png';
import like_img from '../icons/like.svg';

const addPost = 'ADD-POST';
const changePost = 'CHANGE-POST';

let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            messageStore: [
                {
                    name: 'Ярослав',
                    lastMessage: 'Погнали в кс',
                    id: 1,
                    img: friend1_img,
                    time: '15:45',
                    lastMessageImg: friend1_img,
                },
                {
                    name: 'Георгий',
                    lastMessage: 'Привет, сладкий',
                    id: 2,
                    img: friend2_img,
                    time: '12:40',
                    lastMessageImg: friend2_img,
                }, 
                {
                    name: 'Ярослав',
                    lastMessage: 'Вечером',
                    id: 3,
                    img: friend3_img,
                    time: '17:37',
                    lastMessageImg: camera_img,
                }, 
            ],
        }
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {
        switch(action.type) {
            case addPost: {
                let newPost = {
                    name: 'Владислав Павлович',
                    img: camera_img,
                    date: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`,
                    text: this._state.profilePage.newPostText,
                    likeCount: 0,
                    id: 3,
                    like: like_img
                };
                
                this._state.profilePage.postStore.push(newPost);
                this._state.profilePage.newPostText = '';
            
                this._callSubscriber(this._state);
                break;
            }
            case changePost: {
                this._state.profilePage.newPostText = action.payload;
                this._callSubscriber(this._state);
                break;
            }
            default: {
                console.log('eror')
                break;
            }

        }
    },
}

export const addPostActionCreator = () => ({type: addPost});
    
export const changePostActionCreator = (value) => {
    return {
        type: changePost,
        payload: value
    }
}

export default store;

