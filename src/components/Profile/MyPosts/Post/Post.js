import c from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={c['post']}>
            <div className={c['post__header']}>
                <img className={c['post__owner-img']} src={props.img} alt="icon" />
                <div className="post_autor">
                    <div className={c['post__name']}>{props.name}</div>
                    <div className={c['post__date']}>{props.date}</div>
                </div>
            </div>
            
            <div className={c['post__text']}> 
                {props.text} 
            </div>
            
            <div className={c['post__footer']}>
                <div className={c['post__likes-wrapper']}>
                    <img src={props.like} alt="" />
                    <div className={c['post__likes-count']}>
                        {props.like_count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;