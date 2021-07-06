import React from "react";
import Classes from "./Post.module.css";

function Post({
  displayName,
  username,
  verified,
  timeStamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className={Classes.post}>
      <p>Hello</p>
    </div>
  );
}

export default Post;
