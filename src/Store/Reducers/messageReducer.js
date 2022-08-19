import camera_img from '../../icons/camera_25.png';

import friend1_img from '../../icons/friends/friend_1.jpg';
import friend2_img from '../../icons/friends/friend_2.jpg';
import friend3_img from '../../icons/friends/friend_3.jpg';

const SEND_MESSAGE = 'social_network/messages/SEND-MESSAGE';

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

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                name: action.payload.recipient,
                lastMessage: action.payload.message,
                id: 4,
                img: camera_img,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                lastMessageImg: camera_img
            }

            return {
                ...state,
                messageStore: [...state.messageStore, newMessage],
            };
        }
        default: {
            return state;
        }
    }
}

export const sendMessage = (messageInfo) => ({ type: SEND_MESSAGE, payload: messageInfo })

export default messageReducer;
