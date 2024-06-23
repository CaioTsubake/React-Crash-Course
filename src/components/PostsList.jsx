import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsList() {
  return (
    <>
      <NewPost></NewPost>
      <ul className={classes.posts}>
        <Post author="Maximillian" body="React.js is awesome!" />
        <Post author="Manuel" body="Check-out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
