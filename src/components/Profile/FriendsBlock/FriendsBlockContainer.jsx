import { connect } from 'react-redux';

import FriendsBlock from './FriendsBlock';

import c from './FriendsBlock.module.css';

const mapStateToProps = (state) => {
    const friendsStore = state.profilePage.friendsStore;

    const friends = friendsStore.map((friend,index) => {
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

    return {
        friends
    }   
}

const FriendsBlockContainer = connect(mapStateToProps, null)(FriendsBlock);

export default FriendsBlockContainer;