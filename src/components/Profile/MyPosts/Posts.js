import classes from "./Posts.module.css";

import Post from './Post/Post';
import SubmitBox from "./sumbitBox/submitBox";

const Posts = (props) => {

    let posts = props.postStore.map(post => {
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
        <div className={classes.post_wrapper}>
            <div></div>
            <div>
                <div className={classes.post_title}>My posts</div>
                <SubmitBox 
                    newPostText={props.newPostText} 
                    dispatch={props.dispatch}
                />
                <div className={classes.profile_posts}>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default Posts;