import c from './FriendsBlock.module.css';

const FriendsBlock = ({friends}) => {
    return (
        <div className={c.friendsBlock}>
            {friends}
        </div>
    )
}

export default FriendsBlock;