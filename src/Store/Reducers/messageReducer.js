import camera_img from '../../icons/camera_25.png';

import friend1_img from '../../icons/friends/friend_1.jpg';
import friend2_img from '../../icons/friends/friend_2.jpg';
import friend3_img from '../../icons/friends/friend_3.jpg';

const initialState = {
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

export const messageReducer = (state = initialState, action) => {
    
    return state;
}