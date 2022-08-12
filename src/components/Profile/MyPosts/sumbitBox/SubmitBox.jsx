import c from './SubmitBox.module.css';

import React from 'react';
import { Formik } from 'formik';

const SubmitBox = ({addPost}) => {
    return (
        <Formik
            initialValues={{ postText: ''}}
            validate={null}
            onSubmit={(values, { setSubmitting}) => {
                addPost(values.postText);
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className={c.submitBox}>
                    <div className={c.submitBoxArea}>
                        <div>
                            <img 
                                src="https://vk.com/images/camera_50.png" 
                                alt="profile_img" 
                                className={c.submitBoxImg}
                            />
                        </div>
                        <textarea
                            type='текст'
                            name='postText'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.postText}
                            placeholder='Что нового?'
                            className={c.submitBoxText}
                        />  
                    </div>
                    <div className={c.submitBoxButtons}>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={c.submitBoxBtn}
                        > Send </button> 
                        <button className={c.submitBoxBtn}>Clear</button> 
                    </div>
                </form>
            )}
        </Formik>

    )
}

export default SubmitBox;