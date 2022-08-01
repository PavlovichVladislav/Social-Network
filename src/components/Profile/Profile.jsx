import c from "./Profile.module.css"

import PostsContainer from "./MyPosts/PostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto"
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer"

const Profile = () => {
    return (
        <div className={c.profile}>
            <div className={c.profileLeftColumn}>
                <ProfilePhoto/>
                <FriendsBlockContainer/>
            </div>
            <div className={c.profileRightColumn}>
                <ProfileInfo/> 
                <PostsContainer/>
            </div>
        </div>
    )
}

export default Profile;
 

 