import c from "./ProfileInfo.module.css"

const ProfileData = ({profile}) => {
    const returnContacts = () => {
        const contacts = Object.keys(profile.contacts).map((contact) => {
            return ( 
                profile.contacts[contact] && 
                <Contact 
                    contact={contact} 
                    contactValue={profile.contacts[contact]}
                />
            )
        })

        return contacts;
    }

    return (
        <div className={c.profileInfoContent}>
            <div className="contentLeft">
                <div className={c.profileInfoDate}>About me:</div>
                <div className="job">Find a job:</div>
                {profile.lookingForAJob && <div className="jobDescr">Skills:</div>}
                <div className="contacts">Contacts:</div>
            </div>

            <div className="contentRight">
                <div className={c.profileInfoDate}>{profile.aboutMe || 'No info'}</div>
                <div className="job">{profile.lookingForAJob ? 'Yes' : 'No'}</div>
                {profile.lookingForAJob && <div className="jobDescr">{profile.lookingForAJobDescription}</div>}
                <div className="Contacts">
                    {returnContacts()}
                </div>
            </div>
        </div>
    )
}

const Contact = ({contact, contactValue}) => {
    return <div key={contact}>{contact} : {contactValue}</div>
}

export default ProfileData;