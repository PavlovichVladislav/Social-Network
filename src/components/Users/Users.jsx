import c from './Users.module.css';
import userPhoto from '../../icons/user.jpg';
import User from './User';


const Users = ({users, onUsersLoad, following, follow, unfollow}) => {
    return (
        <>
            {users.map( user => {
                let photoUrl = '';
                user.photos.small !== null 
                    ? photoUrl = user.photos.small 
                    : photoUrl = userPhoto;
                
                return (
                    <User
                        userId={user.id}
                        photo={photoUrl}
                        name={user.name}
                        status={user.status}
                        followed={user.followed}
                        following={following}
                        follow={follow}
                        unfollow={unfollow}
                        key={user.id}
                    />
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