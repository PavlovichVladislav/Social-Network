import StoreContext from '../../../Store/StoreContext';
import FriendsBlock from './FriendsBlock';

import c from './FriendsBlock.module.css';

const FriendsBlockContainer = () =>     {
    return (
        <StoreContext.Consumer>
        {
            (store) => {
                const friendsStore = store.getState().profilePage.friendsStore;

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

                return <FriendsBlock friends={friends}/>
            }
        }   
        </StoreContext.Consumer>
    )
}

export default FriendsBlockContainer;