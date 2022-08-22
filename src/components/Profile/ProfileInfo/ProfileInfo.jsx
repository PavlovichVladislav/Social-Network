import c from "./ProfileInfo.module.css"

import { useState } from "react";

import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, owner, updateUserInfo}) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={c.profileInfo}>
            <h1 className={c.profileInfoName}>{profile.fullName}</h1>

            <ProfileStatus
                status={status}
                updateStatus={updateStatus}
                owner={owner}
            />

            <div className={c.profileInfoDivider}></div>

            {editMode 
                ? <ProfileDataForm updateUserInfo={updateUserInfo} profile={profile}/> 
                : <ProfileData profile={profile} owner={owner}/>}
            {owner ? <button onClick={ () => {setEditMode(!editMode)}}>Edit</button> : null }
        </div>
    )   
}

export default ProfileInfo;

