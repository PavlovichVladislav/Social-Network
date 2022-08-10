import { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logIn, logOut } from '../../Store/Reducers/authReducer';

class HeaderContainer extends Component {
    signIn = () => {
        this.props.logIn();
    }

    render() {
        return <Header signIn={this.signIn} {...this.props}/>
    } 
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.data.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logIn, logOut })(HeaderContainer);