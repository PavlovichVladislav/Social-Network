import c from "./Post.module.css";

const Post = ({img, name, date, text, like, like_count, deletePost}) => {
    return (
        <div className={c.post}>
            <div className={c.postHeader}>
                <img 
                    className={c.postOwnerImg} src={img} alt="icon" />
                <div>
                    <div className={c.postName}>{name}</div>
                    <div className={c.postDate}>{date}</div>
                </div>
            </div>
            
            <div className={c.postText}> 
                {text} 
            </div>
            
            <div className={c.postFooter}>
                <div className={c.postLikesWrapper}>
                    <img src={like} alt="like" />
                    <div className={c.postLikesCount}>
                        {like_count}
                    </div>
                </div>
                <button onClick={deletePost}>delete</button>
            </div>
        </div>
    )
}

export default Post;