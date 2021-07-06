import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import Classes from "./Post.module.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className={Classes.post} ref={ref}>
        <div className={Classes.post__avatar}>
          <Avatar>{avatar}</Avatar>
        </div>
        <div className={Classes.post__body}>
          <div className={Classes.post__header}>
            <div className={Classes.post__headerText}>
              <h3>
                {displayName}{" "}
                <span className={Classes.post__headerSpecial}>
                  {verified && (
                    <VerifiedUserIcon className={Classes.post_badge} />
                  )}{" "}
                  @{username}
                </span>
              </h3>
            </div>
            <div className={Classes.post__headerDescription}>
              <p>{text}</p>
            </div>
            {image && <img src={image} alt="DemoGif"></img>}
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
);

export default Post;
