import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography variant="overline">
          Version: {process.env.REACT_APP_VERSION}
        </Typography>
      </div>
      <div className="footer_right">
        <Typography variant="overline">
          &copy; {new Date().getFullYear()}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
