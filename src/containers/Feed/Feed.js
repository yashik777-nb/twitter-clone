import React, { useEffect, useState } from "react";
import Classes from "./Feed.module.css";

import TweetBox from "../../components/TweetBox/TweetBox";
import Post from "../../components/Post/Post";

import db from "../../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className={Classes.feed}>
      <div className={Classes.feed__header}>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
