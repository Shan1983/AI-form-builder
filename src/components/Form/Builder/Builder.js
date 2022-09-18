import React from "react";
import "./Builder.css";

// the billion icons this requires..
import CropDinIcon from "@mui/icons-material/CropDin";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BsTrash from "@mui/icons-material/Delete";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { BsFileText } from "react-icons";
import FcRightUp from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import FlareIcon from "@mui/icons-material/Flare";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import slugify from "react-slugify";

const Builder = () => {
  // dummy data
  const [formData, setFormData] = React.useState([
    {
      elementText: "This is a text field test",
      elementType: "textField",
      open: true,
      required: false,
    },
    {
      elementText: "This is a radio test",
      disabled: false,
      elementType: "radio",
      elementName: slugify("this is a radio test"),
      options: [
        { optionText: "option 1" },
        { optionText: "option 2" },
        { optionText: "option 3" },
      ],
      open: true,
      required: true,
    },
    {
      elementText: "This is a checkbox test",
      disabled: false,
      elementType: "checkbox",
      elementName: slugify("this is a checkbox test"),
      options: [
        { optionText: "option 1" },
        { optionText: "option 2" },
        { optionText: "option 3" },
      ],
      open: true,
      required: true,
    },
  ]);

  console.log(formData && formData?.map((d) => console.log(d.open)));

  const builderUI = () =>
    formData &&
    formData.map((d) => (
      <>
        <Accordion expanded={d.open} className={d.open ? "add_border" : ""}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
            className={d.elementType === "textField" ? "hide" : ""}
          >
            {d.open ? (
              <div className="saved_element">
                {d.elementType !== "textField" ? (
                  <Typography
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      letterSpacing: ".1px",
                      lineHeight: "1rem",
                      paddingBottom: "8px",
                      marginLeft: "10px",
                    }}
                    variant="h6"
                  >
                    {d.elementText}
                  </Typography>
                ) : (
                  ""
                )}

                {d.options?.map((o, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled={d.disabled}
                        control={
                          <input
                            type={d.elementType}
                            color="primary"
                            style={{ marginLeft: "3px" }}
                            required={d.required}
                            name={d.elementName}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            style={{
                              marginLeft: "10px",
                            }}
                          >
                            {d.options[j].optionText}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary>

          <div className="element_boxes">
            <AccordionDetails className="add_element">
              <div className="text_title_element">
                <input
                  type="text"
                  className="element_title"
                  placeholder="Element title"
                  value={d.elementText}
                />
              </div>
              <div className="add_element_top">
                <IconButton>
                  <AddAPhotoIcon style={{ color: "#5F6368" }} />
                </IconButton>
                {/* <Select
                  className="select"
                  style={{ color: "#5F6368", fontSize: "1.5rem" }}
                  labelId="elements"
                  label="Controls"
                > */}
                <TextField
                  style={{ color: "#5F6368", fontSize: "1.5rem" }}
                  className="select select_box"
                  select
                  label={d.elementType || `Form Controls`}
                >
                  <MenuItem id="text" value="Text">
                    <SubjectIcon style={{ marginRight: "10px" }} /> Textfield
                  </MenuItem>
                  <MenuItem id="checkbox" value="CheckBox">
                    <CheckBoxIcon
                      style={{ marginRight: "10px", COLOR: "#70757A" }}
                      checked
                    />
                    Select
                  </MenuItem>
                  <MenuItem id="radio" value="Radio">
                    <Radio
                      className="element_control_radio"
                      style={{ COLOR: "#70757A" }}
                      checked
                    />
                    Radio
                  </MenuItem>
                  {/* </Select> */}
                </TextField>
              </div>
              {d.options?.map((op, i) => (
                <div className="add_element_body" key={i}>
                  {d.elementText !== "text" ? (
                    <input
                      type={d.elementType}
                      style={{ marginRight: "10px" }}
                      disabled
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div className="text_input_text">
                    <input
                      type="text"
                      className="text_input"
                      placeholder="Enter Option"
                      value={d.options?.optionText}
                    />
                  </div>
                  <div className="text_input_controls">
                    <IconButton>
                      <AddIcon style={{ COLOR: "#70757A" }} />
                    </IconButton>
                    <IconButton>
                      <AddAPhotoIcon style={{ COLOR: "#70757A" }} />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>
              ))}

              {d.options?.length < 5 ? (
                <div className="add_element_body" style={{ marginLeft: "7px" }}>
                  <FormControlLabel
                    className="element_form_control"
                    disabled
                    control={
                      d.elementType != "text" ? (
                        <input
                          type={d.elementType}
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          disabled
                        />
                      ) : (
                        <ShortTextIcon style={{ marginRight: "10px" }} />
                      )
                    }
                    label={
                      <div className="new_element_title">
                        <input
                          type="text"
                          className="text_input"
                          style={{
                            fontSize: "1rem",
                            width: "60px",
                          }}
                          placeholder="Add another"
                        />
                        <Button
                          size="small"
                          style={{
                            textTransform: "none",
                            color: "#4285f4",
                            fontSize: "1rem",
                            position: "absolute",
                            right: "40px",
                          }}
                        >
                          <AddIcon />
                          New Option
                        </Button>
                      </div>
                    }
                  />
                </div>
              ) : (
                ""
              )}

              <div className="add_footer">
                <div className="add_element_bottom_left">
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontSize: "1rem",
                    }}
                  >
                    <WidgetsIcon
                      fontSize="large"
                      style={{
                        padding: "2px",
                        marginRight: "8px",
                      }}
                    />{" "}
                    Configuration
                  </Button>

                  <div className="add_element_bottom">
                    <IconButton aria-label="Copy">
                      <FilterNoneIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <BsTrash />
                    </IconButton>
                    <Typography
                      variant="overline"
                      style={{ color: "#5f6368", fontSize: "1rem" }}
                    >
                      Required{" "}
                      <Switch
                        name="checkedA"
                        color="primary"
                        checked={d.required}
                      />
                    </Typography>
                    <IconButton aria-label="delete">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </div>
        </Accordion>
      </>
    ));

  return (
    <div>
      <div className="builder_form">
        <br />
        <br />
        <div className="section">
          <div className="builder_form_section">
            <div className="builder_form_top">
              <input
                type="text"
                className="builder_form_top_name"
                style={{ color: "#000" }}
                placeholder="Untitled Form"
              />
              <input
                type="text"
                className="builder_form_top_desc"
                placeholder="Form Description"
              />
            </div>
          </div>
          {builderUI()}
        </div>
      </div>
    </div>
  );
};

export default Builder;
