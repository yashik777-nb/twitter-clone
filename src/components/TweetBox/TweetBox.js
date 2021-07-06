import React, { useState } from "react";
import Classes from "./Tweetbox.module.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    // console.log({
    //   displayName: "Yash IK",
    //   username: "YaswanthIK",
    //   verified: true,
    //   text: tweetMessage,
    //   image: tweetImage,
    //   avatar: "YI",
    // });
    db.collection("posts").add({
      displayName: "Yash IK",
      username: "YaswanthIK",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "YI",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className={Classes.tweetBox}>
      <form>
        <div className={Classes.tweetBox__input}>
          <Avatar alt="Remy Sharp">YI</Avatar>
          <input
            value={tweetMessage}
            placeholder="What's Happenning!"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className={Classes.tweetBox__inputImage}
          value={tweetImage}
          placeholder="Optional: Enter image URL"
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
        />
        <Button
          type="submit"
          className={Classes.tweetBox__tweetButton}
          onClick={(e) => sendTweet(e)}
        >
          TWEET
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
