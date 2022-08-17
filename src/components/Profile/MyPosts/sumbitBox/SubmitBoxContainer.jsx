import SubmitBox from './SubmitBox';

import { addPost } from '../../../../Store/Reducers/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const newPostText = state.profilePage.newPostText;
    return {
        newPostText
    }
}

const SubmitBoxContainer = connect(mapStateToProps, { addPost })(SubmitBox);

export default SubmitBoxContainer;