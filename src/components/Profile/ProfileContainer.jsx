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

    render() {
        return (
            this.props.profile === null 
            ? <Preloader/> 
            : <Profile 
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
    }
};

export default compose(
    connect(mapStateToProps, {getUserPage, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


