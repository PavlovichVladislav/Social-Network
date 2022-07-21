import c from "./Posts.module.css";

import SubmitBoxContainer from "./SumbitBox/SubmitBoxContainer";

const Posts = ({posts}) => {
    return (
        <div className={c.postWrapper}>
            <div className={c.postTitle}>My posts</div>
                <SubmitBoxContainer/>
            {posts}
        </div>
    )
}

export default Posts;