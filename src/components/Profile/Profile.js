import c from "./Profile.module.css"


import PostsContainer from "./MyPosts/PostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto"
import FriendsBlock from "./FriendsBlock/FriendsBlock"

const Profile = ({store}) => {
    return (
        <div className={c['profile']}>
            <div className={c['profile__left-column']}>
                <ProfilePhoto/>
                <FriendsBlock store={store} />
            </div>
            <div className={c['profile__right-column']}>
                <ProfileInfo/> 
                <PostsContainer
                    store={store}
                    // postStore={state.postStore} 
                    // newPostText={state.newPostText}
                    // dispatch={dispatch} 
                    />
            </div>
        </div>
    )
}

export default Profile;
 

 