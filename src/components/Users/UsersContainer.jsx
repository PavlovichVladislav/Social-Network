import { Component } from 'react';
import { connect } from "react-redux";
import { getUsers, follow, unfollow } from "../../Store/Reducers/usersReducer";

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { currentPageSelector, pageSizeSelector, userFollowingSelector, usersLoadingSelector, usersSelector } from '../../Store/Selectors/usersSelectors';

class UsersAPIContainer extends Component {
    componentDidMount() {
        if (this.props.users.length === 4) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }

    onUsersLoad = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    } 

    render() {
        return <>
                    {this.props.loading ? <Preloader/> : null}
                    <Users 
                        users={this.props.users}
                        onUsersLoad={this.onUsersLoad}
                        following={this.props.following}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                    />
                </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: usersSelector(state),
        pageSize: pageSizeSelector(state),
        currentPage: currentPageSelector(state),
        loading: usersLoadingSelector(state),
        following: userFollowingSelector(state)
    }
}

export default connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow
})(UsersAPIContainer);
