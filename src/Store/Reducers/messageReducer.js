import camera_img from '../../icons/camera_25.png';

import friend1_img from '../../icons/friends/friend_1.jpg';
import friend2_img from '../../icons/friends/friend_2.jpg';
import friend3_img from '../../icons/friends/friend_3.jpg';

const sendMessage = 'SEND-MESSAGE';
const changeRecipient = 'CHANGE-RECIPIENT';
const changeMessage = 'CHANGE-MESSAGE';

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
    newMessageRecipient: '',
    newMessageText: '',
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendMessage: {
            const newMessage = {
                name: state.newMessageRecipient,
                lastMessage: state.newMessageText,
                id: 4,
                img: camera_img,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                lastMessageImg: camera_img
            }

            const stateCopy = {...state};
            stateCopy.messageStore = [...state.messageStore];
            stateCopy.messageStore.push(newMessage);

            stateCopy.newMessageRecipient = '';
            stateCopy.newMessageText = '';

            return stateCopy;
        }
        case changeRecipient: {
            const stateCopy = {...state};
            stateCopy.newMessageRecipient = action.payload;
            return stateCopy;
        }
        case changeMessage: {
            const stateCopy = {...state};
            stateCopy.newMessageText = action.payload;
            return stateCopy;
        }
        default: {
            console.log('invalid action creator name');
            break;
        }
    }
    return state;
}

export const sendMessageActionCreator = () => {  
    return {
        type: sendMessage
    }
}

export const changeRecipientActionCreator = (recipient) => {
    return {
        type: changeRecipient,
        payload: recipient
    }
}

export const changeMessageActionCreator = (message) => {
    return {
        type: changeMessage,
        payload: message,
    }
}