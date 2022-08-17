import { connect } from 'react-redux';
import { deletePost } from '../../../Store/Reducers/profileReducer';


import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postStore
    }
}

const PostsContainer = connect(mapStateToProps, { deletePost })(Posts);

export default PostsContainer;