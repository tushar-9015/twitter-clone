import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://images.pexels.com/photos/19491009/pexels-photo-19491009/free-photo-of-monkey-sitting-on-a-wall-and-eating-an-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <textarea placeholder="what's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
