import { connect } from "react-redux";
import { login } from "../../../Store/Reducers/authReducer";
import LoginForm from "./LoginForm";

export default connect(null, {login})(LoginForm);