import { Component } from 'react';
import { connect } from "react-redux";
import { setCurPage, setUsers, toggleFollow, toggleLoading, toggleFollowingProcess } from "../../Store/Reducers/usersReducer";

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../API/api';

class UsersAPIContainer extends Component {
    componentDidMount() {
        if (this.props.users.length === 4) {
            this.props.toggleLoading();
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleLoading();
                this.props.setUsers(data.items);
            })
        }
    }

    onUsersLoad = () => {
        const page = this.props.currentPage + 1;
        this.props.setCurPage(page);
        
        this.props.toggleLoading();
        usersAPI.getUsers(page, this.props.pageSize)
        .then(data => {
            this.props.toggleLoading();
            this.props.setUsers(data.items);
        })
    } 

    render() {
        return <>
                    {this.props.loading ? <Preloader/> : null}
                    <Users 
                        users={this.props.users}
                        toggleFollow={this.props.toggleFollow}
                        onUsersLoad={this.onUsersLoad}
                        toggleFollowingProcess={this.props.toggleFollowingProcess}
                        following={this.props.following}
                    />
                </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        loading: state.usersPage.loading,
        following: state.usersPage.following
    }
}

export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurPage,
    toggleLoading,
    toggleFollowingProcess
})(UsersAPIContainer);
