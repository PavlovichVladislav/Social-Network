import c from "./ProfileInfo.module.css"

const ProfileInfo = ({profile}) => {
    return (
        <div className={c['profile-info']}>
            <h1 className={c['profile-info__name']}>{profile.fullName}</h1>
            <div className={c['profile-info__divider']}></div>
            <div className={c['profile-info__content']}>
                <div >
                    <div className={c['profile-info__date']}>Date of birth:</div>
                    <div className="city">City:</div>
                    <div className="education">Education:</div>
                </div>
                <div >
                    <div className={c['profile-info__date']}>15.09.2002</div>
                    <div className="city">Novosibirsk</div>
                    <div className="education">NSTU</div>
                </div>
            </div>
        </div>
    )
    
}

export default ProfileInfo;

