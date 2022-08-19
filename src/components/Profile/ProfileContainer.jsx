import { Component } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';

import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';

import { getUserPage, getStatus, updateStatus } from '../../Store/Reducers/profileReducer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { withRouter } from '../../HOC/withRouter';


class ProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId;
        this.props.getUserPage(userId);
        this.props.getStatus(userId);
        
    }

    shouldComponentUpdate(nextProps) {
        if (!(nextProps.profile && this.props.profile)) {
            return true;
        }
        
        if (nextProps.router.params.userId != this.props.profile.userId) return true;

        if (nextProps.profile.photos.small !== this.props.profile.photos.small) {console.log('new photo'); return true};

        return false;
    }

    componentDidUpdate(prevProps) {
        const userId = this.props.router.params.userId; 
        if (this.props.profile && userId != this.props.profile.userId) {
            this.props.getUserPage(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        return (
            this.props.profile === null 
            ? <Preloader/> 
            : <Profile
                owner={this.props.authId == this.props.router.params.userId} 
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authId: state.auth.id
    }
};

export default compose(
    connect(mapStateToProps, {getUserPage, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


