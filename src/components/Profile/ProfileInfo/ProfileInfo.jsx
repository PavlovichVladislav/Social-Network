import { useState } from "react";
import c from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

const ProfileDataForm = ({updateUserInfo, profile}) => {
    
    const returnContacts = (errors) => {
        const contacts = Object.keys(profile.contacts).map(contact => {
            return (
                <>
                    <div>{contact}</div>
                    <Field type="text" name={`contacts.${contact}`}/>
                    <ErrorMessage name={`contacts.${contact}`} />
                </>
            )
        })
        
        return contacts;
    }

    return (
        <Formik
            initialValues={{
                aboutMe: profile.aboutMe, 
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                fullName: profile.fullName,
                contacts: {
                    github: profile.contacts.github || '',
                    vk: profile.contacts.vk || '',
                    facebook: profile.contacts.facebook || '',
                    instagram: profile.contacts.instagram || '',
                    twitter: profile.contacts.twitter || '',
                    website: profile.contacts.website || '',
                    youtube: profile.contacts.youtube || '',
                    mainLink: profile.contacts.mainLink || '',
                }
            }}
            onSubmit={(values, { setSubmitting, setErrors }) => {
                updateUserInfo(values)
                .then(data => { 
                    const errs = {contacts: {}}; 
                    data.messages.forEach(message => {
                        errs.contacts[message.slice(message.match(/>/).index+1).replace(/\)/,'').toLowerCase()] = message;
                    })
                    setErrors({...errs});
                })
                .then(setSubmitting(false))
            }}
        >
            {({ isSubmitting, errors }) => (
                <Form>
                    <div>AboutMe</div>
                    <Field type="textarea" name="aboutMe" />
                    <div>Looking for a job</div>
                    <Field type="checkbox" name="lookingForAJob" />
                    <div>Skills</div>
                    <Field type="textarea" name="lookingForAJobDescription"/>
                    <div>Full name</div>
                    <Field type="text" name="fullName"/>
                    <div>Contacts</div>
                    {returnContacts(errors)}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default ProfileInfo;

