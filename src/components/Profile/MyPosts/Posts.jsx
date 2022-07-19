import c from "./Posts.module.css";

import Post from './Post/Post';
import SubmitBox from "./SumbitBox/SubmitBox";

const Posts = ({postStore, newPostText, dispatch}) => {

    let posts = postStore.map(post => {
        return <Post
                    img={post.img}
                    name={post.name}
                    date={post.date}
                    text={post.text}
                    like_count={post.likeCount}
                    like={post.like}
                />
    })

    return (
        <div className={c.postWrapper}>
            <div className={c.postTitle}>My posts</div>
            <SubmitBox 
                newPostText={newPostText} 
                dispatch={dispatch}
            />
            {posts}
        </div>
    )
}

export default Posts;