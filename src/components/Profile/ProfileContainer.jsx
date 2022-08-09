import { Component } from 'react';
import { connect } from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';

import { setUserProfile } from '../../Store/Reducers/profileReducer';
import { usersAPI } from '../../API/api';

class ProfileAPIContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId;
        usersAPI.getUserPage(userId).then(data => {
            this.props.setUserProfile(data);
        })
    }

    render() {
        return (
            this.props.profile === null 
            ? <Preloader/> 
            : <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileAPIContainer));


