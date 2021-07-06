import React from "react";
import Classes from "./Tweetbox.module.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className={Classes.tweetBox}>
      <form>
        <div className={Classes.tweetBox__input}>
          <Avatar alt="Remy Sharp">YI</Avatar>
          <input placeholder="What's Happenning!" />
        </div>
        <input
          className={Classes.tweetBox__inputImage}
          placeholder="Enter image URL"
          type="text"
        />
        <Button className={Classes.tweetBox__tweetButton}>TWEET</Button>
      </form>
    </div>
  );
}

export default TweetBox;
