import c from './SubmitBox.module.css';

import React from 'react';

const SubmitBox = ({addPost, changePost, newPostText}) => {
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
                    onChange={changePost}
                />  
            </div>
            <div className={c.submitBoxButtons}>
                <button 
                    onClick={addPost} 
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