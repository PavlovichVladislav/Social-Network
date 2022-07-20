import React from 'react';

import SubmitBox from './SubmitBox';

import { addPostActionCreator, changePostActionCreator } from '../../../../Store/Reducers/profileReducer';

const SubmitBoxContainer = ({dispatch, newPostText}) => {
    const addPost = () => {
        dispatch(addPostActionCreator());
    }

    let changePost = (e) => {
        dispatch(changePostActionCreator(e.target.value));
        e.target.value= newPostText;
    }

    return (<SubmitBox addPost={addPost} changePost={changePost} newPostText={newPostText}/>)
}

export default SubmitBoxContainer;