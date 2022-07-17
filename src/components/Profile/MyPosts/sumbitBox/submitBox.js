import c from './submitBox.module.css'
import React from 'react'
import { addPostActionCreator, changePostActionCreator } from '../../../../Store/store';

const SubmitBox = (props) => {

    const ref = React.createRef();

    const sendPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        props.dispatch(changePostActionCreator(ref.current.value));
        ref.current.value = props.newPostText;
    }

    return (
        <div className={c['submit-box']}>
            <div className={c['submit-box__area']}>
                <div>
                    <img 
                        src="https://vk.com/images/camera_50.png" 
                        alt="profile_img" 
                        className={c['submit-box__img']}
                    />
                </div>
                <textarea 
                    ref={ref}
                    placeholder='Что нового?'
                    value={props.newPostText}
                    className={c['submit-box__text']}
                    onChange={onPostChange}
                />  
            </div>
            <div className={c['submit-box__buttons']}>
                <button onClick={sendPost} className={c['submit-box__btn']}>Send</button> 
                <button className={c['submit-box__btn']}>Clear</button> 
            </div>
        </div>
    )
}

export default SubmitBox;