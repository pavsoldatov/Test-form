import { pairList, input, output } from "../script.js";

import convertPairToObject from "../utility/convertPairToObject.js";
import createOptionFromObject from "../utility/createOptionFromObject.js";
import inputIsInvalid from "../utility/inputIsInvalid.js";

const handleFormSubmit = (e) => {
  e.preventDefault();
  const regex = /^([a-zA-Z0-9]+)\s?=(?!\s*$)\s?([a-zA-Z0-9]+)*$/g;
  if (inputIsInvalid(input, regex)) return;

  const pair = convertPairToObject(input.value, "=");
  pairList.unshift(pair); // the newly added option inserts on top at indx 0

  const newOption = createOptionFromObject(pairList[0]);
  output.options.add(newOption, output.options[0]);

  input.value = "";
};

export default handleFormSubmit;
