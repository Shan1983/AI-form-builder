import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography variant="overline">
          <p>Build version: {process.env.REACT_APP_VERSION}</p>
          <p>Form Builder (POC)</p>
        </Typography>
      </div>
      <div className="footer_right">
        <Typography
          variant="overline"
          style={{ position: "absolute", bottom: "10px", right: "20px" }}
        >
          &copy; {new Date().getFullYear()}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
