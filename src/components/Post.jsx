import classes from "./Post.module.css"

function Post(prop) {
    return (
        <div className={classes.post}>
            <p className={classes.author} >{prop.author}</p>
            <p className={classes.text}>{prop.body}</p>
        </div>
    );
}

export default Post;