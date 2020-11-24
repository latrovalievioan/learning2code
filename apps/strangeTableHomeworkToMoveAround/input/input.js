const Input = () => {
  const field = document.createElement("input");
  field.setAttribute("type", "text");
  const clearField = () => {
    field.value = "";
  };
  return { domElement: field, clearField };
};
