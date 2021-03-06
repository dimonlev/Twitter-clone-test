import React from "react";
import S from "./Sidebar.module.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = (props) => {
  return (
    <div className={S.wrapper}>
      <div className={S.sidebarContainer}>
        <div className={S.sidebar}>
          <div className={S.twitterIcon}>
            <TwitterIcon fontSize="large" />
          </div>

          <SidebarOption Icon={HomeIcon} text="Home" option="/home" />
          <SidebarOption Icon={SearchIcon} text="Explore" option="/explore" />
          <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" option="/notification" />
          <SidebarOption Icon={MailOutlineIcon} text="Messages" option="/messages" />
          <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" option="/bookmarks" />
          <SidebarOption Icon={ListAltIcon} text="Lists" option="/lists" />
          <SidebarOption Icon={PermIdentityIcon} text="Profile" option="/profile" />
          <SidebarOption Icon={MoreHorizIcon} text="More" option="/more" />

          <Button variant="outlined" className={S.tweet} fullWidth>
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
