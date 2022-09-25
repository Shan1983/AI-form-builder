import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StorageIcon from "@mui/icons-material/Storage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./MainBody.css";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import AddIcon from "@mui/icons-material/Add";

const MainBody = () => {
  const [formData, setFormData] = React.useState([]);

  React.useEffect(() => {
    const data = window.localStorage.getItem("forms");
    if (data) {
      setFormData([JSON.parse(data)]);
    } else {
      setFormData([]);
    }
  }, []);

  return (
    <div className="main_body" style={{ height: "100vh" }}>
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
        <div className="doc_card">
          <Button
            component={Link}
            to={`/form/${uuid()}`}
            variant="contained"
            sx={{
              color: "#000",
              width: "100%",
              background: "#F5F5F5;",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AddIcon
              style={{
                fontSize: "5rem",
                color: "#1E88E5",
                height: "100%",
              }}
            />
          </Button>
        </div>
        {formData &&
          formData.map((d, i) => (
            <div key={d.formName} className="doc_card">
              <Button
                component={Link}
                to={`/form/${d.form[i].id}`}
                variant="contained"
                sx={{
                  color: "#000",
                  width: "100%",
                  background: "#F5F5F5;",
                  textAlign: "center",
                }}
              >
                <div className="doc_card_content">
                  <div className="doc_file_logo">
                    <DashboardIcon
                      sx={{
                        color: "#1E88E5",
                        fontSize: "3rem",
                      }}
                    />
                  </div>
                  <Typography variant="subtitle1">{d.formName}</Typography>
                  <Typography variant="caption">Id: {d.form[i].id}</Typography>
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
