import { Component } from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserData, logOut } from '../../Store/Reducers/authReducer';

class HeaderContainer extends Component {
    componentDidMount() {
        console.log('mount');
    }   

    signIn = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data);
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