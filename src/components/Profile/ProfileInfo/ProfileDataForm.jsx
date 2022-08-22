import { Formik, Form, Field, ErrorMessage } from 'formik';

const ProfileDataForm = ({updateUserInfo, profile}) => {
    
    const returnContacts = () => {
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

export default ProfileDataForm;