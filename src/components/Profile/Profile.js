import c from "./Profile.module.css"


import PostsContainer from "./MyPosts/PostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto"
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer"

const Profile = (props) => {
    return (
        <div className={c['profile']}>
            <div className={c['profile__left-column']}>
                <ProfilePhoto/>
                <FriendsBlockContainer/>
            </div>
            <div className={c['profile__right-column']}>
                <ProfileInfo/> 
                <PostsContainer/>
            </div>
        </div>
    )
}

export default Profile;
 

 