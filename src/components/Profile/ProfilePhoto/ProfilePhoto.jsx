import c from './ProfilePhoto.module.css';
import profile_img from "../../../icons/user.png"
import { connect } from 'react-redux';
import { putUserPhoto } from '../../../Store/Reducers/profileReducer';
import { useState } from 'react';

const ProfilePhoto = ({photo, putUserPhoto, owner}) => {
    const [newPhoto, setPhoto] = useState(undefined);

    return (
        <div className={c.profilePhoto}>
            <img src={photo === null ? profile_img : photo} 
                alt="profile_photo" 
                className={c.profilePhotoImg} 
            />
            {owner
            ?
            <>
                <input 
                    type="file"
                    className={c.profilePhotoInput}
                    name='file'
                    id='input_photo'
                    onChange={(e) => {setPhoto(e.target.files[0])}}
                />
                <label  
                    className={c.profilePhotoLabel}
                    onClick={() => {putUserPhoto(newPhoto)}}
                >Загрузить фотографию</label>
            </>
            : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        authId: state.auth.id, 
    })
}

export default connect(mapStateToProps, { putUserPhoto })(ProfilePhoto);

