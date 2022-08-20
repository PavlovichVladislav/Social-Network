import c from "./Posts.module.css";
import { memo } from "react";
import Post from './Post/Post';
import SubmitBoxContainer from "./SumbitBox/SubmitBoxContainer";

const Posts = ({posts, deletePost }) => {
    const newPosts = posts.map((post) => {
        return (
            <Post
                img={post.img}
                name={post.name}
                date={post.date}
                text={post.text}
                like_count={post.likeCount}
                like={post.like}
                key={post.id}
                deletePost={() => {deletePost(post.id)}}
            />
        )
    })

    return (
        <div className={c.postWrapper}>
            <div className={c.postTitle}>My posts</div>
                <SubmitBoxContainer/>
            {newPosts}
        </div>
    )
}

export default memo(Posts, (prevProps, nextProps) => {
    if (prevProps.posts.length !== nextProps.posts.length) return false
    return true;
});