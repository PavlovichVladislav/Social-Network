import c from './Users.module.css';
import { Component } from 'react';

import * as axios from "axios";
import userPhoto from '../../icons/user.jpg';

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        })
        console.log('mount');
    }

    componentDidUpdate() {
        console.log('update');
    }

    onUsesLoad = () => {
        const page = this.props.currentPage + 1;
        this.props.setCurPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        })
    } 

    render() {
        return (
            <>
                {this.props.users.map( user => {
                    return (
                        <div className={c.user}>
                            <img className={c.userPhoto} src={userPhoto} alt="user"/>
                            <div className={c.userInfo}>
                                <div className={c.userName}>{user.name}</div>
                                <div className={c.userStatus}>{user.status}</div>
                            </div>
                            
                            {user.followed 
                                ? <button 
                                    className={c.userBtn}
                                    onClick={() => {this.props.toggleFollow(user.id)}}
                                >unfollow</button> 
                                : <button 
                                    className={c.userBtn}
                                    onClick={() => {this.props.toggleFollow(user.id)}}
                                >follow</button>}
                        </div>
                    )
                })}
                <button 
                    className={c.userBtn}
                    onClick={() => {this.onUsesLoad()}}
                >SHOW MORE</button>
            </>
        )
    }
}

export default Users;

    