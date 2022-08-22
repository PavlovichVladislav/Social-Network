import c from './LoginForm.module.css';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        captcha: state.auth.captcha,
    }
}

const Captcha = ({captcha}) => {
    return (
        <>
            {captcha 
            ? <>
                <img className={c.captcha} alt='captcha' src={captcha}/> 
                <Field name='captcha' type='text' placeholder="captcha"/>
            </>
            :null}
        </>
    )
}

const CaptchaWithImg = connect(mapStateToProps, null)(Captcha);

const LoginForm = ({login, authError, getCaptchaThunk}) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false, captcha: ''}}
            validate={values => {
                const errors = {};

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Required';
                }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                login(values)
                // .then(response => {
                //     if (response.resultCode === 10) {
                //         getCaptchaThunk()
                //         .then(data => values.captchaImg = data.url);
                //     }
                // })
                .then(setSubmitting(false));
            }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form className={c.authorizationForm} onSubmit={handleSubmit}>
                    <Field 
                        className={c.authorizationInput} 
                        placeholder="email"
                        name="email"
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}

                    <Field 
                        className={c.authorizationInput} 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    {errors.auth &&'Неверный email или пароль'}
                    <label className={c.authorizationCheck}>
                        <Field 
                            name='rememberMe'
                            type="checkbox"
                            checked={values.rememberMe}
                        />
                        <span>remember me</span>
                    </label>
                    
                    <button 
                        className={c.authorizationBtn}
                        disabled={isSubmitting}
                        type="submit"
                    > Log in </button>
                    <CaptchaWithImg/>
                </Form>
            )}
      </Formik>
    )
}

export default LoginForm;