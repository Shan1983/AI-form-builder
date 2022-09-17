import React from "react";
import "./FormHeader.css";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdFolderOpen } from "react-icons/io";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Alert, Button, IconButton, Typography } from "@mui/material";
import { ColorLensOutlined } from "@mui/icons-material";

const FormHeader = () => {
  const [docName, setDocName] = React.useState();
  const [blink, setBlink] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const handleSave = () => {
    setTimeout(() => {
      setBlink(!blink);
    }, 500);
    setTimeout(() => {
      setBlink(false);
      setAlert(true);
    }, 5000);
  };

  return (
    <>
      {alert != true ? (
        <Alert severity="info">Don't forget to save your form!</Alert>
      ) : null}
      <div className="form_header">
        <div className="form_header_left">
          <DynamicFormIcon sx={{ color: "gray", fontSize: "2rem" }} />
          <Button
            style={{ marginLeft: "10px" }}
            variant="contained"
            color="primary"
            href="#contained-buttons"
            onClick={handleSave}
          >
            Save
          </Button>
          <input
            type="text"
            placeholder="Untitled Form"
            className="form_name"
            value={docName}
          />
          <IoMdFolderOpen
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          />
          <FiStar
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          />
          {blink ? (
            <Typography variant="overline" className="blink">
              Saving form...
            </Typography>
          ) : (
            <Typography variant="overline" hidden>
              Saving form...
            </Typography>
          )}
        </div>
        <div className="form_header_right">
          <IconButton>
            <ColorLensOutlined />
          </IconButton>
          <IconButton>
            <AiOutlineEye className="form_header_icon" />
          </IconButton>
          <IconButton>
            <FiSettings size={25} className="form_header_icon" />
          </IconButton>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Source
          </Button>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default FormHeader;
