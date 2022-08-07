import c from './Users.module.css';
import userPhoto from '../../icons/user.jpg';

const Users = ({users, toggleFollow, onUsersLoad}) => {
    return (
        <>
            {users.map( user => {
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
                                onClick={() => {toggleFollow(user.id)}}
                            >unfollow</button> 
                            : <button 
                                className={c.userBtn}
                                onClick={() => {toggleFollow(user.id)}}
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