import Post from './Post/Post';
import Posts from './Posts';

const PostsContainer = ({store}) => {
    const state = store.getState();

    let posts = state.profilePage.postStore.map(post => {
        return <Post
                    img={post.img}
                    name={post.name}
                    date={post.date}
                    text={post.text}
                    like_count={post.likeCount}
                    like={post.like}
                />
    })

    return (<Posts posts={posts} newPostText={state.profilePage.newPostText} dispatch={store.dispatch}/>)
}

export default PostsContainer;