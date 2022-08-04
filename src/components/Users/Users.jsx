import c from './Users.module.css';

const Users = ({users, toggleFollow, setUsers}) => {
    return (
        <div>
            {users.map( user => {
                return (
                    <div>
                        <span>{user.name}</span>
                        <span>{user.status}</span>
                        {user.followed 
                            ? <button onClick={() => {toggleFollow(user.id)}}>unfollow</button> 
                            : <button onClick={() => {toggleFollow(user.id)}}>follow</button>}
                    </div>
                )
            })}
        </div>
    )
}

export default Users;