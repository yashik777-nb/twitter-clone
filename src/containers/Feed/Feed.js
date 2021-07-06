import React from "react";
import Classes from "./Feed.module.css";

import TweetBox from "../../components/TweetBox/TweetBox";

function Feed() {
  return (
    <div className={Classes.feed}>
      {/* Header */}
      <div className={Classes.feed__header}>
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
