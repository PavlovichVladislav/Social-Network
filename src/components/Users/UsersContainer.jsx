import { Component } from 'react';
import { connect } from "react-redux";
import { setCurPage, setUsers, toggleFollow, toggleLoading } from "../../Store/Reducers/usersReducer";

import * as axios from "axios";

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends Component {
    componentDidMount() {
        if (this.props.users.length === 4) {
            this.props.toggleLoading();
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleLoading();
                this.props.setUsers(response.data.items);
            })
            console.log('mount');
        }
    }

    onUsersLoad = () => {
        const page = this.props.currentPage + 1;
        this.props.setCurPage(page);
        this.props.toggleLoading();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleLoading();
            this.props.setUsers(response.data.items);
        })
    } 

    render() {
        return <>
                    {this.props.loading ? <Preloader/> : null}
                    <Users 
                        users={this.props.users}
                        toggleFollow={this.props.toggleFollow}
                        onUsersLoad={this.onUsersLoad}
                    />
                </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        loading: state.usersPage.loading
    }
}

const UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurPage,
    toggleLoading
})(UsersAPIComponent);

export default UsersContainer;