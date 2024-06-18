import classes from "./Post.module.css"

function Post(prop) {
    return (
        <li className={classes.post}>
            <p className={classes.author} >{prop.author}</p>
            <p className={classes.text}>{prop.body}</p>
        </li>
    );
}

export default Post;