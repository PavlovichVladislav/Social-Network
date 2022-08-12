import { Formik } from 'formik';

import c from "./DialogsPannel.module.css";

const DialogsPannel = ({sendMessage}) => {
    return (
        <Formik
            initialValues={{ recipient: '', message: '' }}
            validate= {null}
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
                        type='text'
                        name="recipient"
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        value={values.recipient} 
                        placeholder="Кому?" 
                    />
                    <textarea
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

// onChange={(e) => {changeRecipient(e.target.value)}}
// onChange={(e) => {changeMessage(e.target.value)}}
// onClick={sendMessage}
export default DialogsPannel;
 