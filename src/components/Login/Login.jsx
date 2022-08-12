import c from "./Login.module.css";
import LoginForm from "./LoginForm/LoginFormContainer";

const Login = () => {
    return <>
        <h1 className={c.authorizationTitle}>Login</h1>
        <LoginForm/>
    </>
}

export default Login;