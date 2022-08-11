import c from "./Profile.module.css"

import PostsContainer from "./MyPosts/PostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto"
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer"

const Profile = ({profile, status, updateStatus}) => {
    return (
        <div className={c.profile}>
            <div className={c.profileLeftColumn}>
                <ProfilePhoto photo={profile.photos.large}/>
                <FriendsBlockContainer/>
            </div>
            <div className={c.profileRightColumn}>
                <ProfileInfo 
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                /> 
                <PostsContainer/>
            </div>
        </div>
    )
}

export default Profile;
 

 