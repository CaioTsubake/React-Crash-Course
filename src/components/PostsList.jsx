import Post from "./Post";

function PostsList(params) {
  return (
    <ul>
      <Post author="Maximillian" body="React.js is awesome!" />
      <Post author="Manuel" body="Check-out the full course!" />
    </ul>
  );
}

export default PostsList;
