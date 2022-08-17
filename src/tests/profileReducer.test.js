import profileReducer, { addPost, deletePost } from "../Store/Reducers/profileReducer";

import like_img from '../icons/like.svg';

import user1_img from '../img/user1.jpg';
import user2_img from '../img/user2.jpg';

import friend1_img from '../icons/friends/friend_1.jpg';
import friend2_img from '../icons/friends/friend_2.jpg';
import friend3_img from '../icons/friends/friend_3.jpg';
import friend4_img from '../icons/friends/friend_4.jpg';

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

it('new post should be added', () => {
    let action = addPost('hello');
    let newState = profileReducer(initialState, action);

    expect(newState.postStore.length).toBe(3);
})

it('delete post test', () => {
    let action = deletePost(1);
    let newState = profileReducer(initialState, action);

    expect(newState.postStore.length).toBe(1);
})