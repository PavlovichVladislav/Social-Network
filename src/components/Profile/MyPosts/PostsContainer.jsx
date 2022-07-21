import StoreContext from '../../../Store/StoreContext';
import Post from './Post/Post';
import Posts from './Posts';

const PostsContainer = () => {
    return (
        <StoreContext.Consumer> 
        {
            (store) => {
                function createPosts(postsArray) {
                    let posts = postsArray.map(post => {
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

                const posts = createPosts(store.getState().profilePage.postStore);

                return <Posts posts={posts}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;