import c from "./ProfileInfo.module.css"
import ProfileStatusOld from "./ProfileStatusOld";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus, owner}) => {
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
                    <div className={c.profileInfoDate}>Date of birth:</div>
                    <div className="city">City:</div>
                    <div className="education">Education:</div>
                </div>
                <div >
                    <div className={c.profileInfoDate}>15.09.2002</div>
                    <div className="city">Novosibirsk</div>
                    <div className="education">NSTU</div>
                </div>
            </div>
        </div>
    )
    
}

export default ProfileInfo;

