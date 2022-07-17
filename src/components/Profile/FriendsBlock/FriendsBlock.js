import c from './FriendsBlock.module.css';

const FriendsBlock = (props) => {

    const friends = props.friendsStore.map( (friend,index) => {
        if (index < 6) {
            return (
                <div className={c['friends-block__friend']}>
                    <img
                        className={c['friends-block__img']} 
                        src={friend.img} 
                        alt="friend_img" />
                    <div 
                        className={c['friends-block__name']}>
                        {friend.name}
                    </div>
                </div>
            )
        }
    })

    return (
        <div className={c['friends-block']}>
            {friends}
        </div>
    )
}

export default FriendsBlock;