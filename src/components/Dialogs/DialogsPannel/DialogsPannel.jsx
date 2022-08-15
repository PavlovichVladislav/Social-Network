import { Formik, Form, Field } from 'formik';

import c from "./DialogsPannel.module.css";

const DialogsPannel = ({sendMessage}) => {
    return (
        <Formik
            initialValues={{ recipient: '', message: '' }}
            validate= {values => {
                const errors = {};

                if (!values.message) {
                    errors.message = 'Required';
                }

                if (!values.recipient) {
                    errors.recipient = 'Напишите что - нибудь';
                } else if (values.recipient.length > 20) {
                    errors.recipient  = 'Недопустимая длина'
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {

                sendMessage(values);
                setSubmitting(false);
            }}
        >
            {({values, errors, touched, isSubmitting, setErrors, handleSubmit}) => (
                <Form className={c.dialogsPannel}>
                    <Field
                        className={errors.recipient && touched.recipient ? c.error : null}
                        type='text'
                        name="recipient"
                        onBlur={() => {setErrors({recipient: null})}} 
                        value={values.recipient} 
                        placeholder="Кому?" 
                    />
                    <Field
                        className={errors.message && touched.message ? c.error : null}
                        type='text'
                        name="message"
                        onBlur={() => {setErrors({message: null})}}  
                        value={values.message} 
                        placeholder="Напишите сообщение..." 
                    />
                    <button
                        type="submit" 
                        disabled={isSubmitting}
                    > New message</button>
                </Form> 
            )}
        </Formik>
    )
}

export default DialogsPannel;
 