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
    },
  ],
  formName: "Untitled Form",
  formDesc: "",
  saved: false,
  savedForm: [],
};

export const actionTypes = {
  SET_FORM: "SET_FORM",
  SET_FORM_NAME: "SET_FORM_NAME",
  SET_FORM_DESC: "SET_FORM_DESC",
  SET_SAVED: "SET_SAVED",
  SET_SAVED_FORM_DATA: "SET_SAVED_FORM_DATA",
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
      return { ...state, saved: action.payload };
    case actionTypes.SET_SAVED_FORM_DATA:
      console.log("inside: ", action.payload);
      return { ...state, savedForm: action.payload };
    default:
      return state;
  }
};

export default reducer;
