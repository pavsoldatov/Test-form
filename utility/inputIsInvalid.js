const inputIsInvalid = (input, regex) => {
  const emptyInputAlertMsg =
    "A Name/Value pair must include at least 3 characters.";
  const formatAlertMsg =
    "Incorrect syntax.\nA Name/Value pair must be alphanumeric and follow the <Name>=<Value> format.";

  if (!input.value) {
    alert(emptyInputAlertMsg);
    input.focus();
    return true;
  } else if (!input.value.match(regex)) {
    alert(formatAlertMsg);
    input.value = "";
    return true;
  }

  return false;
};

export default inputIsInvalid;
