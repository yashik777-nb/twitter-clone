import { Avatar } from "@material-ui/core";
import React from "react";
import Classes from "./Post.module.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

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
      <div className={Classes.post__avatar}>
        <Avatar>YI</Avatar>
      </div>
      <div className={Classes.post__body}>
        <div className={Classes.post__header}>
          <div className={Classes.post__headerText}>
            <h3>
              Yash IK{" "}
              <span className={Classes.post__headerSpecial}>
                <VerifiedUserIcon className={Classes.post_badge} />
                @yashik
              </span>
            </h3>
          </div>
          <div className={Classes.post__headerDescription}>
            <p>
              Dummy Post.Dummy Post.Dummy Post.Dummy Post.Dummy Post.Dummy Post.
            </p>
          </div>
          <img
            src="https://media.giphy.com/media/xp8qOAySKLcbAHYdCs/giphy.gif"
            alt="DemoGif"
          ></img>
          <div className={Classes.post__footer}>
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
