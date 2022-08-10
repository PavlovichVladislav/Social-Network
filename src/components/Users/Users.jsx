import c from './Users.module.css';
import userPhoto from '../../icons/user.jpg';
import { NavLink } from "react-router-dom";

const Users = ({users, onUsersLoad, following, follow, unfollow}) => {
    return (
        <>
            {users.map( user => {
                let photoUrl = '';
                user.photos.small !== null 
                    ? photoUrl = user.photos.small 
                    : photoUrl = userPhoto;
                
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
                            ? 
                                <button
                                    disabled={following.some(id => id === user.id)} 
                                    className={c.userBtn}
                                    onClick={() => {unfollow(user.id)}}
                                >unfollow</button> 
                            : 
                                <button
                                    disabled={following.some(id => id === user.id)}  
                                    className={c.userBtn}
                                    onClick={() => {follow(user.id)}}
                                >follow</button>
                        }
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