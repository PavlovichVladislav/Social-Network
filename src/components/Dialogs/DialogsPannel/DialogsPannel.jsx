import { Formik } from 'formik';

import c from "./DialogsPannel.module.css";

import { requiredField, validatePost } from '../../../utils/validators';

const DialogsPannel = ({sendMessage}) => {
    return (
        <Formik
            initialValues={{ recipient: '', message: '' }}
            validate= {values => {
                const errors = {};

                errors.message = requiredField('Необходимо написать сообщение')(values.message);
                errors.recipient = validatePost(20)(values.message);

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                sendMessage(values);
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
                <form className={c.dialogsPannel} onSubmit={handleSubmit}>
                    <input
                        className={errors.recipient ? c.error : null}
                        type='text'
                        name="recipient"
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        value={values.recipient} 
                        placeholder="Кому?" 
                    />
                    <textarea
                        className={errors.message ? c.error : null}
                        type='text'
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}  
                        value={values.message} 
                        placeholder="Напишите сообщение..." 
                    />
                    <button
                        type="submit" 
                        disabled={isSubmitting}
                    > New message</button>
                </form> 
            )}
        </Formik>
    )
}

export default DialogsPannel;
 