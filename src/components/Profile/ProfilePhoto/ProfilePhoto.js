import c from './ProfilePhoto.module.css';
import profile_img from "../../../img/profile_img.jpg"

const ProfilePhoto = ({photo}) => {
    return (
        <div className={c['profile-photo']}>
            <img src={photo === null ? profile_img : photo} 
                alt="profile_photo" 
                className={c['profile-photo__img']} 
            />
            <button className={c['profile-photo__btn']}>
                Редактировать
            </button>
        </div>
    )
}

export default ProfilePhoto;

