import c from "./Posts.module.css";

import SubmitBoxContainer from "./SumbitBox/SubmitBoxContainer";

const Posts = ({posts, newPostText, dispatch}) => {
    return (
        <div className={c.postWrapper}>
            <div className={c.postTitle}>My posts</div>
            <SubmitBoxContainer newPostText={newPostText} dispatch={dispatch}/>
            {posts}
        </div>
    )
}

export default Posts;