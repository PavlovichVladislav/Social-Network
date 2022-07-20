import c from './FriendsBlock.module.css';

const FriendsBlock = ({store}) => {
    const friendsStore = store.getState().profilePage.friendsStore;
    console.log(friendsStore);

    const friends = friendsStore.map( (friend,index) => {
        if (index < 6) {
            return (
                <div className={c.friendsBlockFriend}>
                    <img
                        className={c.friendsBlockImg} 
                        src={friend.img} 
                        alt="friend_img" 
                    />
                    <div className={c.friendsBlockName}>
                        {friend.name}
                    </div>
                </div>
            )
        }
    })

    return (
        <div className={c.friendsBlock}>
            {friends}
        </div>
    )
}

export default FriendsBlock;