import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, IconButton, Link, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TempDrawer from "../Drawer/TempDrawer";

const Header = () => {
  return (
    <div className="header">
      <div className="header_info">
        <TempDrawer />

        <DashboardIcon
          className="logo"
          color="primary"
          sx={{ width: "40px", height: "40px" }}
        />

        <div className="info">
          <Link href="/" sx={{ textDecoration: "none", color: "#909090" }}>
            <Typography href="/" variant="h3">
              Form Builder
            </Typography>
          </Link>
        </div>
      </div>

      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="search" placeholder="Search for a form" />
      </div>

      <div className="header_right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
