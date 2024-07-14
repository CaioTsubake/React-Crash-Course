import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modelContent;

  if (modalIsVisible) {
    modelContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        ></NewPost>
      </Modal>
    );
  }

  return (
    <>
      {modelContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check-out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
