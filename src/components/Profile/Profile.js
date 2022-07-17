import c from "./Profile.module.css"


import Posts from "./MyPosts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto"
import FriendsBlock from "./FriendsBlock/FriendsBlock"

const Profile = (props) => {
    return (
        <div className={c['profile']}>
            <div className={c['profile__left-column']}>
                <ProfilePhoto/>
                <FriendsBlock friendsStore={props.state.friendsStore} />
            </div>
            <div className={c['profile__right-column']}>
                <ProfileInfo/> 
                <Posts 
                    postStore={props.state.postStore} 
                    newPostText={props.state.newPostText}
                    dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Profile;
 

 