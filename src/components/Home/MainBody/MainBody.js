import { Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StorageIcon from "@mui/icons-material/Storage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./MainBody.css";

const MainBody = () => {
  const dummyData = Array.from({ length: 10 }, (_, i) => {
    return {
      title: `form name #${i}`,
      icon: DashboardIcon,
      date: `0${i + 1}/09/2022`,
    };
  });

  console.log(dummyData);

  return (
    <div className="main_body">
      <div className="main_body_top">
        <div
          className="main_body_top_left"
          style={{ fontSize: "1.5rem", fontWeight: 500 }}
        >
          <Typography variant="h5">Recent forms</Typography>
        </div>
        <div className="main_body_right">
          <div
            className="main_body_top_center"
            style={{ fontSize: "1.5rem", marginRight: "125px" }}
          >
            <Typography variant="overline">Owned by anyone</Typography>
            <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "1.5rem", color: "#000" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "1.5rem", color: "#000" }} />
          </IconButton>
        </div>
      </div>
      <div className="main_body_docs">
        {dummyData &&
          dummyData.map((d) => (
            <div key={d.title} className="doc_card">
              <Button
                variant="contained"
                component="label"
                sx={{
                  color: "#000",
                  width: "100%",
                  background: "#F5F5F5;",
                  textAlign: "center",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                <div className="doc_card_content">
                  <div className="doc_file_logo">
                    <DashboardIcon
                      sx={{
                        color: "#1E88E5",
                        fontSize: "3rem",
                        "&:hover": { color: "#fff" },
                      }}
                    />
                  </div>
                  <Typography variant="subtitle1">{d.title}</Typography>
                  <Typography variant="caption">
                    Last updated: {d.date}
                  </Typography>
                  <div
                    className="doc_content"
                    style={{ fontSize: "1rem", color: "grey" }}
                  >
                    <div className="doc_content_left">
                      <StorageIcon
                        style={{
                          color: "#000",
                          fontSize: "1rem",
                          backgroundColor: "#fff",
                          padding: "5px",
                          marginRight: "5px",
                          borderRadius: "5px",
                        }}
                      />
                      <div className="doc_content_right">
                        <MoreVertIcon
                          style={{
                            color: "#000",
                            fontSize: "1rem",
                            backgroundColor: "#fff",
                            padding: "5px",
                            marginRight: "5px",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainBody;
