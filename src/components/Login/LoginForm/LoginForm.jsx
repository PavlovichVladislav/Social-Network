import c from './LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const customInput = (props) => {
    return (
        <input 
            className={c.authorizationInput} 
            {...props}
        />
    )
}

const LoginForm = ({login}) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false}}
            // validate={values => {
            //   const errors = {};
            //   if (!values.email) {
            //     errors.email = 'Required';
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = 'Invalid email address';
            //   }
            //   return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
                login(values);
                // console.log('hello');
                setSubmitting(false);

                // setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                // setSubmitting(false);
                // }, 400);
            }}
        >
            {/* {({ isSubmitting }) => (
                <Form className={c.authorizationForm}>
                    <Field as ={customInput} type="login" name="login" placeholder={"login"} />
                    <ErrorMessage name="login" component="div" />
                    <Field as ={customInput} type="password" name="password" placeholder={"password"}/>
                    <ErrorMessage name="password" component="div" />
                    <label>
                        <Field type="CheckBox"></Field>
                        <span>remember me</span>
                    </label>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={c.authorizationBtn}
                    >
                        Login
                    </button>
                </Form>
            )} */}
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className={c.authorizationForm} onSubmit={handleSubmit}>
                    <input 
                        className={c.authorizationInput} 
                        placeholder={"email"}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input 
                        className={c.authorizationInput} 
                        placeholder={"password"}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <label className={c.authorizationCheck}>
                        <input 
                            name={'rememberMe'}
                            type={"checkbox"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.rememberMe}
                        />
                        <span>remember me</span>
                    </label>
                    <button 
                        className={c.authorizationBtn}
                        disabled={isSubmitting}
                        type="submit"
                    >
                            Log in
                    </button>
                </form>
            )}
      </Formik>
    )
}

export default LoginForm;