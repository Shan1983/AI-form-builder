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
    default:
      return state;
  }
};

export default reducer;
