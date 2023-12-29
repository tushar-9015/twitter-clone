import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import "./Post.css";

const Post = ({ displayName, username, avatar, verified, text, image }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images.pexels.com/photos/19491009/pexels-photo-19491009/free-photo-of-monkey-sitting-on-a-wall-and-eating-an-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              John cena{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" /> @sjfnDjsjsas
              </span>
            </h3>
          </div>
          <div className="post__headerDespriction">
            <p>I know what you are doing?</p>
          </div>
        </div>
        <img src="https://media1.tenor.com/m/pVku7Ivp5vcAAAAd/rajpal-yadav-rajpal-yadav-comedy.gif" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
