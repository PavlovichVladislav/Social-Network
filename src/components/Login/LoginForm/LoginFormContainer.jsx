import { connect } from "react-redux";
import { login } from "../../../Store/Reducers/authReducer";
import LoginForm from "./LoginForm";

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, {login})(LoginForm);