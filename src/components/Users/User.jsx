import c from './Users.module.css';
import { NavLink } from "react-router-dom";

const User = ({userId, photo, name, status, followed, following, follow, unfollow }) => {
    return (
        <div className={c.user} key={userId}>
            <NavLink to={`/profile/${userId}`}>
                <img className={c.userPhoto} src={photo} alt="user"/>
            </NavLink>
            <div className={c.userInfo}>
                <div className={c.userName}>{name}</div>
                <div className={c.userStatus}>{status}</div>
            </div>
            {followed
                ? 
                    <button
                        disabled={following.some(id => id === userId)} 
                        className={c.userBtn}
                        onClick={() => {console.log('click'); unfollow(userId)}}
                    >unfollow</button> 
                : 
                    <button
                        disabled={following.some(id => id === userId)}  
                        className={c.userBtn}
                        onClick={() => {console.log('click'); follow(userId)}}
                    >follow</button>
            }
        </div>
    )
}

export default User;