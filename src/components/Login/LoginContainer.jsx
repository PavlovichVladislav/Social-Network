import { connect } from "react-redux";
import { Component } from "react";
import { Navigate } from 'react-router-dom';

import Login from "./Login";

class LoginContainer extends Component {
    render() {
        if (this.props.auth && this.props.userId) return <Navigate to={`/profile/${this.props.userId}`}/>
        return <Login/>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth,
        userId: state.auth.id,
    }
}

export default connect(mapStateToProps,null)(LoginContainer);