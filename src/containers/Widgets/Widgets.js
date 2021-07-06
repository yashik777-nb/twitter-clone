import React from "react";
import Classes from "./Widgets.module.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widjets = () => {
  return (
    <div className={Classes.widgets}>
      <div className={Classes.widgets__input}>
        <SearchIcon className={Classes.widgets__searchIcon} />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className={Classes.widgets__widgetContainer}>
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed
          className={Classes.test}
          tweetId={"919580291869548546"}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rogerfederer"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/yaswanth.iddibani"}
          options={{ text: "#reactjs is awesome", via: "YaswanthIK7" }}
        />
      </div>
    </div>
  );
};

export default Widjets;
