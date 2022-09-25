export const saveLocalStorage = (form) => {
  const forms = getLocalStorage();
  if (forms.length >= 1) {
    const formData = forms.map((f) => f.push(form));
    window.localStorage.setItem("forms", JSON.stringify(formData));
  } else {
    window.localStorage.setItem("forms", JSON.stringify(form));
  }
};

export const getLocalStorage = () => {
  const formData = window.localStorage.getItem("forms");
  const formDataParsed = JSON.parse(formData);
  if (formDataParsed) {
    return formDataParsed;
  } else {
    return [];
  }
};
