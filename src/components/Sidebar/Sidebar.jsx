import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOptions/SidebarOptions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* logo */}
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />

      {/* Button */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
