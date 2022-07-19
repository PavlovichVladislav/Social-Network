import c from './SubmitBox.module.css';

import React from 'react';

import { addPostActionCreator, changePostActionCreator } from '../../../../Store/store';

const SubmitBox = ({dispatch, newPostText}) => {

    const sendPost = () => {
        dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        dispatch(changePostActionCreator(e.target.value));
        e.target.value= newPostText;
    }

    return (
        <div className={c.submitBox}>
            <div className={c.submitBoxArea}>
                <div>
                    <img 
                        src="https://vk.com/images/camera_50.png" 
                        alt="profile_img" 
                        className={c.submitBoxImg}
                    />
                </div>
                <textarea 
                    placeholder='Что нового?'
                    value={newPostText}
                    className={c.submitBoxText}
                    onChange={onPostChange}
                />  
            </div>
            <div className={c.submitBoxButtons}>
                <button 
                    onClick={sendPost} 
                    className={c.submitBoxBtn}
                >
                    Send
                </button> 
                <button className={c.submitBoxBtn}>Clear</button> 
            </div>
        </div>
    )
}

export default SubmitBox;