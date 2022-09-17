import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "./FileUpload.css";

const FileUpload = ({ text, inputType }) => {
  return (
    <>
      <div className="upload_btn">
        {inputType === true ? (
          <Button
            variant="contained"
            component="label"
            sx={{
              color: "#fff",
              width: "100%",
              background: "#1E88E5",
              textAlign: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <div className="btn">
              <div className="center">
                <div className="btn_top">
                  <AddIcon fontSize="large" />
                </div>

                <Typography variant="h5">{text}</Typography>
              </div>
            </div>
            <input type="file" hidden />
          </Button>
        ) : (
          <Button
            variant="contained"
            component="label"
            sx={{
              color: "#fff",
              width: "100%",
              background: "#1E88E5",
              textAlign: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <div className="btn">
              <div className="center">
                <div className="btn_top">
                  <AddIcon fontSize="large" />
                </div>

                <Typography variant="h5">{text}</Typography>
              </div>
            </div>
          </Button>
        )}
      </div>
    </>
  );
};

export default FileUpload;
