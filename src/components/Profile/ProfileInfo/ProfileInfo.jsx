import c from "./ProfileInfo.module.css"
import ProfileStatusOld from "./ProfileStatusOld";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus, owner}) => {
    console.log(profile);
    return (
        <div className={c.profileInfo}>
            <h1 className={c.profileInfoName}>{profile.fullName}</h1>
            <ProfileStatus
                status={status}
                updateStatus={updateStatus}
                owner={owner}
            />
            <div className={c.profileInfoDivider}></div>
            <div className={c.profileInfoContent}>
                <div >
                    <div className={c.profileInfoDate}>About me:</div>
                    <div className="contacts">Contacts:</div>
                    <div className="job">Find a job:</div>
                    <div className="jobDescr">Descr of job:</div>
                </div>
                <div >
                    <div className={c.profileInfoDate}>{profile.aboutMe}</div>
                    <div className="Contacts">{profile.contacts[0]}</div>
                    <div className="job">{profile.lookingForAJob}</div>
                    <div className="jobDescr">{profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
    
}

export default ProfileInfo;

