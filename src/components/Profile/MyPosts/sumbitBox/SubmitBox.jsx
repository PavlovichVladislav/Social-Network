import c from './SubmitBox.module.css';

import React from 'react';
import { Formik, Form, Field} from 'formik';
import { validatePost } from '../../../../utils/validators';

const SubmitBox = ({addPost}) => {
    let blur = true;
    return (
        <Formik
            initialValues={{ postText: ''}}
            onSubmit={(values, { setSubmitting}) => {
                addPost(values.postText);
                setSubmitting(false);
            }}
        >
            {({isSubmitting, errors, validateForm, setErrors}) => (
                <Form 
                    className={errors.postText 
                                ?c.submitBox + ' ' + c.submitBoxError 
                                : c.submitBox}
                    onBlur={() => {setErrors({postText: null})}}
                    
                >
                    <div className={c.submitBoxArea}>
                        <div>
                            <img 
                                src="https://vk.com/images/camera_50.png" 
                                alt="profile_img" 
                                className={c.submitBoxImg}
                            />
                        </div>
                        <Field
                            type='textarea'
                            name='postText'
                            placeholder='Что нового?'
                            validate={validatePost(30)}
                            className={ c.submitBoxText }
                        />
                    </div>

                    <div className={c.submitBoxButtons}>
                        <button 
                            type="submit" 
                            disabled={isSubmitting || errors.postText}
                            className={c.submitBoxBtn}
                        > Send </button> 
                        <button type='reset' className={c.submitBoxBtn}>Clear</button> 
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default SubmitBox;