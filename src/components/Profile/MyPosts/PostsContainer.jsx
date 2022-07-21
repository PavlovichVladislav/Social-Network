import { connect } from 'react-redux';

import Post from './Post/Post';
import Posts from './Posts';

const mapStateToProps = (state) => {
    const createPosts = (postsArray) => {
        const posts = postsArray.map(post => {
            return <Post
                        img={post.img}
                        name={post.name}
                        date={post.date}
                        text={post.text}
                        like_count={post.likeCount}
                        like={post.like}
                    />
        })

        return posts;
    }

    const posts = createPosts(state.profilePage.postStore);

    return {
        posts,
    }
}

const PostsContainer = connect(mapStateToProps, null)(Posts);

export default PostsContainer;