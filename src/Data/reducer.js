import uuid from "react-uuid";

export const initialState = {
  // update to reflect OB form defs
  form: [
    {
      id: uuid(),
      elementText: "This is a text field test",
      elementType: "textField",
      open: true,
      required: false,
      options: [],
      saved: false,
    },
  ],
  formName: "Untitled Form",
  formDesc: "",
  saved: false,
};

export const actionTypes = {
  SET_FORM: "SET_FORM",
  SET_FORM_NAME: "SET_FORM_NAME",
  SET_FORM_DESC: "SET_FORM_DESC",
  SET_SAVED: "SET_SAVED",
  SET_UNSAVED: "SET_UNSAVED",
  SET_SAVED_FORM_DATA: "SET_SAVED_FORM_DATA",
  SET_DELETE: "SET_DELETE",
  SET_UPDATE_FORM_ELEMENT_TEXT: "SET_UPDATE_FORM_ELEMENT_TEXT",
  SET_ELEMENT_TYPE: "SET_ELEMENT_TYPE",
  SET_CHANGE_NEW_ELEMENT_VALUE: "SET_CHANGE_NEW_ELEMENT_VALUE",
  SET_REMOVE_ELEMENT_VALUE: "SET_REMOVE_ELEMENT_VALUE",
  SET_ADD_NEW_OPTION_BTN: "SET_ADD_NEW_OPTION_BTN",
  SET_NEW_COPY_ELEMENT: "SET_NEW_COPY_ELEMENT",
  SET_REQUIRED_SWITCH: "SET_REQUIRED_SWITCH",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FORM:
      return { ...state, form: action.payload };
    case actionTypes.SET_FORM_NAME:
      return { ...state, formName: action.payload };
    case actionTypes.SET_FORM_DESC:
      return { ...state, formDesc: action.payload };
    case actionTypes.SET_SAVED:
      const setSaved = state.form.map((f) => (f.saved = true));
      return { ...state, form: setSaved };
    case actionTypes.SET_UNSAVED:
      // this needs to be updated!!
      return { ...state, form: action.payload };
    case actionTypes.SET_UPDATE_FORM_ELEMENT_TEXT:
      console.log("SET_UPDATE_FORM_ELEMENT_TEXT", action.payload);
      const values = [...state.form];
      values[action.payload[0]].elementText = action.payload[1];
      console.log("values", action.payload[1]);
      return { ...state, form: values };
    case actionTypes.SET_SAVED_FORM_DATA:
      return { ...state, form: action.payload };
    case actionTypes.SET_DELETE:
      return { ...state, form: action.payload };
    case actionTypes.SET_ELEMENT_TYPE:
      let el = [...state.form];
      el[action.payload[0]].elementType = action.payload[1];
      return { ...state, form: el };
    case actionTypes.SET_CHANGE_NEW_ELEMENT_VALUE:
      const text = [...state.form];
      text[action.payload[0]].options[actionTypes.payload[1]].optionText =
        action.payload[2];
      return { ...state, form: text };
    case actionTypes.SET_REMOVE_ELEMENT_VALUE:
      const removed = [...state.form];
      if (removed[action.payload[0]].options.length > 1) {
        removed[action.payload[0]].options.splice(action.payload[1], 1);
        return { ...state, form: removed };
      } else {
        removed[action.payload[0]].open = false;
        return { ...state, form: removed };
      }
    case actionTypes.SET_ADD_NEW_OPTION_BTN:
      if (state.form[action.payload[1]] !== "") {
        const option = [...state.form];
        option[action.payload[0]].options?.push({
          optionText: action.payload[1],
        });
        console.log(option);
        return { ...state, form: option };
      }
    case actionTypes.SET_NEW_COPY_ELEMENT:
      const copy = [...state.form];
      copy[action.payload[0]].options.push({
        optionText:
          copy[action.payload[0]].options[action.payload[1]].optionText,
      });
      return { ...state, form: copy };
    case actionTypes.SET_REQUIRED_SWITCH:
      const required = [...state.form];
      required[action.payload].required = !required[action.payload].required;
      return { ...state, form: required };
    default:
      return state;
  }
};

export default reducer;
