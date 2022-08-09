import { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData, logOut } from '../../Store/Reducers/authReducer';
import { usersAPI } from "../../API/api";

class HeaderContainer extends Component {
    signIn = () => {
        usersAPI.authRequest().then(data => {
            if (data.resultCode === 0) {
                this.props.setUserData(data);
            }
        })
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

export default connect(mapStateToProps, { setUserData, logOut})(HeaderContainer);