import React from "react";
import "./Builder.css";

// the billion icons this requires..
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BsTrash from "@mui/icons-material/Delete";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SaveIcon from "@mui/icons-material/Save";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  MenuItem,
  Modal,
  Radio,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import slugify from "react-slugify";
import uuid from "react-uuid";
import { Box } from "@mui/system";

const Builder = () => {
  // dummy data
  const [formData, setFormData] = React.useState([
    {
      id: uuid(),
      elementText: "This is a text field test",
      elementType: "textField",
      open: true,
      required: false,
    },
    {
      id: uuid(),
      elementText: "This is a radio test",
      disabled: false,
      elementType: "radio",
      elementName: slugify("this is a radio test"),
      options: [
        { optionText: "radio option 1" },
        { optionText: "radio option 2" },
        { optionText: "radio option 3" },
      ],
      open: true,
      required: true,
    },
    {
      id: uuid(),
      elementText: "This is a checkbox test",
      disabled: false,
      elementType: "checkbox",
      elementName: slugify("this is a checkbox test"),
      options: [
        { optionText: "checkbo option 1" },
        { optionText: "checkbox option 2" },
      ],
      open: true,
      required: true,
    },
    {
      id: uuid(),
      elementText: "This is a checkbox test",
      disabled: false,
      elementType: "checkbox",
      elementName: slugify("this is a checkbox test"),
      options: [],
      open: true,
      required: true,
    },
  ]);
  const [newInputValue, setNewInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  console.log(formData && formData?.map((d) => console.log(d.open)));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    color: "#fff",
    pt: 2,
    px: 4,
    pb: 3,
  };

  const changeElementValue = (txt, i) => {
    const values = [...formData];
    values[i].elementText = txt;
    setFormData(values);
    console.log("new txt value:", values);
  };

  const addElementType = (i, type) => {
    let el = [...formData];
    console.log(type);
    el[i].elementType = type;

    setFormData(el);
  };

  const changeNewElementValue = (txt, i, j) => {
    const text = [...formData];
    text[i].options[j].optionText = txt;
    setFormData(text);
  };

  const handleRemoveValue = (i, j) => {
    const text = [...formData];
    if (text[i].options.length > 1) {
      text[i].options.splice(j, 1);
      setFormData(text);
    } else {
      text[i].open = false;
      setFormData(text);
    }
    setFormData(text);
  };

  const handleAddNewOption = (i) => {
    console.log("clicked");
    if (newInputValue !== "") {
      const option = [...formData];
      console.log(option[i]);
      option[i].options.push({ optionText: newInputValue });
      setFormData(option);
      setNewInputValue("");
    }
  };

  const handleNewInputValue = (txt) => {
    setNewInputValue(txt);
  };

  const copyInputElement = (i, j) => {
    const el = [...formData];
    el[i].options.push({ optionText: el[i].options[j].optionText });
    setFormData(el);
  };

  const removeEntireElement = (i) => {
    const el = [...formData];
    if (formData.length > 1) el.splice(i, 1);
    setFormData(el);
  };

  const handleRequiredSwitch = (i) => {
    const el = [...formData];
    el[i].required = !el[i].required;
    setFormData(el);
  };

  const handleNewFormBuilderElement = () =>
    setFormData([
      ...formData,
      {
        elementText: "This is an example text field",
        elementType: "textField",
        open: true,
        required: false,
      },
    ]);

  const handleCopyFormElementComplete = (i) => {
    const el = [...formData];
    el.push(el[i]);
    setFormData(el);
  };

  const ElementTypeButtonLogo = (i) => {
    const el = [...formData];
    switch (el[i].elementType) {
      case "textField":
        return (
          <TextFieldsIcon
            className="edit"
            style={{
              padding: "5px",
              border: "1px solid #000",
              borderRadius: "3px",
            }}
          />
        );
      case "radio":
        return (
          <RadioButtonCheckedIcon
            className="edit"
            style={{
              padding: "5px",
              border: "1px solid #000",
              borderRadius: "3px",
            }}
          />
        );
      case "checkbox":
        return (
          <CheckBoxIcon
            className="edit"
            style={{
              padding: "5px",
              border: "1px solid #000",
              borderRadius: "3px",
            }}
          />
        );
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const builderUI = () =>
    formData &&
    formData.map((d, x) => (
      <>
        <Accordion expanded={d.open} className={d.open ? "add_border" : "hide"}>
          <div className="edit_b">
            <div className="builder_edit" style={{ zIndex: 555 }}>
              <div className="edit_btn_top">
                {ElementTypeButtonLogo(x)}
                <IconButton>
                  <AddCircleOutlineIcon
                    onClick={handleNewFormBuilderElement}
                    className="edit"
                  />
                </IconButton>
              </div>
              <div className="edit_bottom_btn">
                <IconButton>
                  <SaveIcon className="edit_bottom_btn_b" />
                </IconButton>
                <IconButton>
                  <EditIcon className="edit_bottom_btn_b" />
                </IconButton>
                <IconButton>
                  <MoreVertIcon className="edit_bottom_btn_b" />
                </IconButton>
              </div>
            </div>
          </div>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "490px" }}
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

          <Divider
            className={d.elementType === "textField" ? "hide" : ""}
            light
            style={{ textTransform: "capitalize" }}
          >
            {d.elementType} options
          </Divider>

          <div className="element_boxes">
            <AccordionDetails className="add_element">
              <div className="text_title_element">
                <input
                  type="text"
                  className="element_title"
                  placeholder="Element title"
                  value={d.elementText}
                  onChange={(e) => changeElementValue(e.target.value, x)}
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
                  <MenuItem
                    onClick={() => addElementType(x, "textField")}
                    id="text"
                    value="Text"
                  >
                    <SubjectIcon style={{ marginRight: "10px" }} /> Textfield
                  </MenuItem>
                  <MenuItem
                    onClick={() => addElementType(x, "checkbox")}
                    id="checkbox"
                    value="CheckBox"
                  >
                    <CheckBoxIcon
                      style={{ marginRight: "10px", COLOR: "#70757A" }}
                      checked
                    />
                    Select
                  </MenuItem>
                  <MenuItem
                    onClick={() => addElementType(x, "radio")}
                    id="radio"
                    value="Radio"
                  >
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
              {d.elementType !== "textField" &&
                d.options.map((f, h) => (
                  <div className="add_element_body">
                    {d.elementText !== "textField" ? (
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
                        placeholder="Add new element text"
                        value={d.options[h].optionText}
                        onChange={(e) =>
                          changeNewElementValue(e.target.value, x, h)
                        }
                      />
                    </div>
                    <div className="text_input_controls">
                      <IconButton>
                        <ContentCopyIcon
                          onClick={() => copyInputElement(x, h)}
                          style={{ COLOR: "#70757A" }}
                        />
                      </IconButton>
                      <IconButton
                        onClick={() => handleRemoveValue(x, h)}
                        aria-label="delete"
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}
              {d.elementType !== "textField" ? (
                <div className="add_element_body" style={{ marginLeft: "7px" }}>
                  <div>
                    <FormControlLabel
                      className="element_form_control"
                      disabled
                      control={
                        d.elementType != "textField" ? (
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
                            }}
                            placeholder={`Enter text`}
                            value={newInputValue}
                            onChange={(e) =>
                              handleNewInputValue(e.target.value)
                            }
                          />
                        </div>
                      }
                    />
                    <Button
                      size="small"
                      style={{
                        textTransform: "none",
                        color: "#4285f4",
                        fontSize: "1rem",
                        marginLeft: "10px",
                      }}
                      onClick={(e) => handleAddNewOption(x)}
                    >
                      <AddIcon />
                      {`Add new ${d.elementType} option`}
                    </Button>
                  </div>
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
                    onClick={handleOpen}
                  >
                    Advanced options
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    <Box sx={{ ...style, width: 200 }}>
                      <h2 id="child-modal-title">This is a POC</h2>
                      <p id="child-modal-description">
                        This button would represent the advanced OB form
                        options, however this is only a test
                      </p>
                      <Button onClick={handleClose}>Close Modal</Button>
                    </Box>
                  </Modal>

                  <div className="add_element_bottom">
                    <IconButton aria-label="Copy">
                      <FilterNoneIcon
                        onClick={() => handleCopyFormElementComplete(x)}
                      />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <BsTrash onClick={() => removeEntireElement(x)} />
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
                        onClick={() => handleRequiredSwitch(x)}
                      />
                    </Typography>
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
          <Button
            onClick={handleNewFormBuilderElement}
            className="add_more_elements_btn"
          >
            Add another element
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Builder;
