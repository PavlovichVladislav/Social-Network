import c from './Users.module.css';
import userPhoto from '../../icons/user.jpg';
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = ({users, toggleFollow, onUsersLoad}) => {
    return (
        <>
            {users.map( user => {
                let photoUrl = '';
                user.photos.small !== null ? photoUrl = user.photos.small : photoUrl = userPhoto;
                
                return (
                    <div className={c.user}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={c.userPhoto} src={photoUrl} alt="user"/>
                        </NavLink>
                        <div className={c.userInfo}>
                            <div className={c.userName}>{user.name}</div>
                            <div className={c.userStatus}>{user.status}</div>
                        </div>
                        
                        {user.followed 
                            ? <button 
                                className={c.userBtn}
                                onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "dd624455-7e20-4684-b6b6-d8c4c621a67d"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            toggleFollow(user.id);
                                        }
                                    })
                                }}
                            >unfollow</button> 
                            : <button 
                                className={c.userBtn}
                                onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "dd624455-7e20-4684-b6b6-d8c4c621a67d"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            toggleFollow(user.id);
                                        }
                                    })
                                }}
                            >follow</button>}
                    </div>
                )
            })}
            <button 
                className={c.userBtn}
                onClick={() => {onUsersLoad()}}
            >SHOW MORE</button>
        </>
    )
};

export default Users;