import { Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import "./Template.css";
import FileUpload from "../../FileUpload/FileUpload";

const Template = () => {
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "1.5rem", color: "#202124" }}>
            <Typography variant="h5">Start building your new forms</Typography>
          </span>
        </div>
        <div className="template_right">
          <div className="galleryBtn">
            <Typography variant="overline">Form Gallery</Typography>
            <UnfoldMoreIcon fontSize="small" />
          </div>

          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card">
          <FileUpload text="AI powered form" inputType={true} />
          <div className="card_info_right">
            <div className="card_info_title">
              <Typography variant="h6">
                Forms <strong>Super</strong> powered!
              </Typography>
            </div>
            <Divider />
            <div className="card_info_body">
              <Typography variant="body1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  laborum quisquam soluta sapiente, cupiditate at sequi,
                  voluptatem exercitationem totam aperiam dignissimos reiciendis
                  magni voluptate vero nihil temporibus accusantium nobis est?
                </p>
              </Typography>
              <Typography variant="body1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  laborum quisquam soluta sapiente, cupiditate at sequi,
                  voluptatem exercitationem totam aperiam dignissimos reiciendis
                  magni voluptate vero nihil temporibus accusantium nobis est?
                </p>
              </Typography>
            </div>
          </div>
        </div>
        <div className="card">
          <FileUpload text="New manual form" inputType={false} />
          <div className="card_info_right">
            <div className="card_info_title">
              <Typography variant="h6">You have total control!</Typography>
            </div>
            <Divider />
            <div className="card_info_body">
              <Typography variant="body1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  laborum quisquam soluta sapiente, cupiditate at sequi,
                  voluptatem exercitationem totam aperiam dignissimos reiciendis
                  magni voluptate vero nihil temporibus accusantium nobis est?
                </p>
              </Typography>
              <Typography variant="body1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  laborum quisquam soluta sapiente, cupiditate at sequi,
                  voluptatem exercitationem totam aperiam dignissimos reiciendis
                  magni voluptate vero nihil temporibus accusantium nobis est?
                </p>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
