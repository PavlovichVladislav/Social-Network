import { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logOut } from '../../Store/Reducers/authReducer';

class HeaderContainer extends Component {
    render() {
        return <Header {...this.props}/>
    } 
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logOut })(HeaderContainer);