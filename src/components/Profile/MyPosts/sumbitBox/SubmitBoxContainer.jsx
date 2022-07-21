import SubmitBox from './SubmitBox';

import { addPostActionCreator, changePostActionCreator } from '../../../../Store/Reducers/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const newPostText = state.profilePage.newPostText;

    return {
        newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePost: (text) => {
            dispatch(changePostActionCreator(text));
        }
    }
}

const SubmitBoxContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitBox);

export default SubmitBoxContainer;