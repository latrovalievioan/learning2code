const Input = (onKeyUp) => {
  const field = document.createElement("input");
  field.setAttribute("type", "text");
  field.addEventListener("keyup", onKeyUp);
  const clearField = () => {
    field.value = "";
  };
  return { domElement: field, clearField };
};
