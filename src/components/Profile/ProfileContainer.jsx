import { Component } from 'react';
import { connect } from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Profile from './Profile';
import * as axios from "axios";
import { setUserProfile } from '../../Store/Reducers/profileReducer';
import Preloader from '../common/Preloader/Preloader';

class ProfileAPIContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
            console.log('mount');
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


